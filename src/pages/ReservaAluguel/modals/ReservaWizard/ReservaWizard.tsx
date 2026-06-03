import React, { useState } from "react"
import {
  Box,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm, useWatch } from "react-hook-form"

import { Button } from "@/components/Button/Button"

import {
  DELIVERY_FEE,
  DELIVERY_OPTIONS,
  PAYMENT_OPTIONS,
  STORE_ADDRESS,
  formatCurrency,
} from "./ReservaWizard.utils"
import { reservaWizardSchema } from "./ReservaWizard.schema"
import type {
  ReservaWizardFormValues,
  ReservaWizardProps,
  ReservaWizardStep,
} from "./ReservaWizard.types"

const DEFAULT_VALUES: ReservaWizardFormValues = {
  deliveryType: "retirar",
  fullName: "",
  phone: "",
  email: "",
  paymentMethod: "retirada",
  notes: "",
}

export const ReservaWizard: React.FC<ReservaWizardProps> = ({
  open,
  onClose,
  equipment,
}) => {
  const [step, setStep] = useState<ReservaWizardStep>(1)

  const {
    handleSubmit,
    reset,
    setValue,
    control,
    trigger,
  } = useForm<ReservaWizardFormValues>({
    resolver: zodResolver(reservaWizardSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const deliveryType =
    useWatch({ control, name: "deliveryType" }) ?? "retirar"
  const fullName = useWatch({ control, name: "fullName" }) ?? ""
  const phone = useWatch({ control, name: "phone" }) ?? ""
  const email = useWatch({ control, name: "email" }) ?? ""

  const handleClose = () => {
    setStep(1)
    reset(DEFAULT_VALUES)
    onClose()
  }

  const handleNext = async () => {
    if (step === 2) {
      const isValid = await trigger(["fullName", "phone", "email"])
      if (!isValid) {
        return
      }
    }

    if (step === 3) {
      setStep(4)
      return
    }

    setStep((prev) => (prev + 1) as ReservaWizardStep)
  }

  const handleBack = () => {
    if (step === 1) {
      handleClose()
      return
    }

    setStep((prev) => (prev - 1) as ReservaWizardStep)
  }

  const deliveryFee = deliveryType === "delivery" ? DELIVERY_FEE : 0
  const totalValue = equipment.price + deliveryFee

  const handleConfirm = () => {
    if (step === 3) {
      handleNext()
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "92%", sm: 560 },
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: "0 24px 48px rgba(0,0,0,0.18)",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Stack spacing={3}>
          {step <= 3 && (
            <Stack spacing={1.5}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {[1, 2, 3].map((item) => (
                  <React.Fragment key={item}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        backgroundColor:
                          step >= item ? "#4c7cf0" : "#dbe7fb",
                        color: step >= item ? "#fff" : "#6b7da8",
                      }}
                    >
                      {item}
                    </Box>
                    {item < 3 && (
                      <Box
                        sx={{
                          width: 50,
                          height: 4,
                          borderRadius: 999,
                          backgroundColor:
                            step > item ? "#4c7cf0" : "#dbe7fb",
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Stack>
            </Stack>
          )}

          {step === 1 && (
            <Stack spacing={2.5}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Como deseja receber?
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                {DELIVERY_OPTIONS.map((option) => {
                  const isSelected = deliveryType === option.value
                  return (
                    <Box
                      key={option.value}
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setValue("deliveryType", option.value, {
                          shouldValidate: true,
                        })
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          setValue("deliveryType", option.value, {
                            shouldValidate: true,
                          })
                        }
                      }}
                      sx={{
                        flex: 1,
                        borderRadius: 1,
                        border: "1px solid",
                        borderColor: isSelected ? "#4c7cf0" : "#d8e3f4",
                        backgroundColor: isSelected ? "#e7f0ff" : "#fff",
                        p: 2,
                        cursor: "pointer",
                        transition: "0.2s ease",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, mb: 0.5 }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {option.description}
                      </Typography>
                    </Box>
                  )
                })}
              </Stack>

              <Box
                sx={{
                  borderRadius: 1,
                  backgroundColor: "#e7f4f6",
                  p: 2,
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {STORE_ADDRESS.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {STORE_ADDRESS.line1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {STORE_ADDRESS.line2}
                </Typography>
              </Box>
            </Stack>
          )}

          {step === 2 && (
            <Stack spacing={2.5}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Seus dados
              </Typography>

              <Stack spacing={2}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Nome completo"
                      placeholder="Seu nome"
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      fullWidth
                      required
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Telefone/Whatsapp"
                      placeholder="(00) 00000-0000"
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      fullWidth
                      required
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Email"
                      placeholder="nome@email.com"
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      fullWidth
                      required
                    />
                  )}
                />
                <Controller
                  name="notes"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Observacoes"
                      placeholder="Escreva se precisar"
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      fullWidth
                      multiline
                      minRows={2}
                    />
                  )}
                />
              </Stack>
            </Stack>
          )}

          {step === 3 && (
            <Stack spacing={2.5}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Confirme o pagamento
              </Typography>

              <Stack spacing={2}>
                <Box
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#e7f4f6",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {equipment.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {deliveryType === "delivery"
                      ? "Delivery"
                      : "Retirada na loja"}
                  </Typography>

                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Typography variant="body2">Total</Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {formatCurrency(totalValue)}
                    </Typography>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#e7f4f6",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Dados do cliente
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {fullName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {email}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#e7f4f6",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {PAYMENT_OPTIONS[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {PAYMENT_OPTIONS[0].description}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          )}

          {step === 4 && (
            <Stack spacing={2} sx={{ alignItems: "center" }}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Reserva confirmada!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Você receberá um email com mais detalhes
              </Typography>
            </Stack>
          )}

          <Divider />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            {step < 4 && (
              <Button
                onClick={handleBack}
                variante="ButtonLinkWhite"
                tamanho="md"
                sx={{
                  borderRadius: "14px",
                  px: 5,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  border: "1px solid #cbd7f0",
                  color: "#395587",
                }}
              >
                Voltar
              </Button>
            )}

            {step < 4 ? (
              <Button
                onClick={
                  step === 3
                    ? handleSubmit(handleConfirm)
                    : handleNext
                }
                variante="ButtonBlue"
                tamanho="md"
                sx={{
                  borderRadius: "14px",
                  px: 5,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  backgroundColor: "#4c7cf0",
                }}
              >
                {step === 3 ? "Confirmar reserva" : "Continuar"}
              </Button>
            ) : (
              <Button
                onClick={handleClose}
                variante="ButtonBlue"
                tamanho="md"
                sx={{
                  borderRadius: "14px",
                  px: 5,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 700,
                  backgroundColor: "#4c7cf0",
                }}
              >
                Fechar
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Modal>
  )
}

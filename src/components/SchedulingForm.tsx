import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material"

import {
  LocalizationProvider,
  DatePicker,
} from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

import { format } from "date-fns"

import {
  Controller,
  useForm,
  useWatch,
} from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import {
  AVAILABLE_TIMES,
  WEEK_DAYS,
  schedulingFormSchema,
  type SchedulingFormSchema,
} from "./SchedulingForm.schema"
import { ptBR } from "date-fns/locale"

export type SchedulingFormProps = {
  open: boolean
  onClose: () => void
  level: string
}

const INPUT_STYLES = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f8f1df",
    borderRadius: "999px",
    fontWeight: 500,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3fa85b",
  },
}

export const SchedulingForm = ({
  open,
  onClose,
  level,
}: SchedulingFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<SchedulingFormSchema>({
    resolver: zodResolver(schedulingFormSchema),
    defaultValues: {
      day: "seg",
      time: "09:00",
      useCustomDate: false,
      customDate: null,
      fullName: "",
      email: "",
      phone: "",
    },
  })

  const selectedDay =
    useWatch({ control, name: "day" }) ?? "seg"
  const selectedTime =
    useWatch({ control, name: "time" }) ?? "09:00"
  const useCustomDate =
    useWatch({ control, name: "useCustomDate" }) ?? false

  if (!open) {
    return null
  }

  const handleSelectDay = (day: string) => {
    setValue("day", day as SchedulingFormSchema["day"], {
      shouldValidate: true,
    })
    setValue("useCustomDate", false, {
      shouldValidate: true,
    })
  }

  const handleSelectTime = (time: string) => {
    setValue("time", time as SchedulingFormSchema["time"], {
      shouldValidate: true,
    })
  }

  const handleToggleCustomDate = () => {
    setValue("useCustomDate", true, {
      shouldValidate: true,
    })
  }

  const onSubmit = (data: SchedulingFormSchema) => {
    const dayLabel = WEEK_DAYS.find(
      (day) => day.value === data.day
    )?.label

    const dateLabel = data.useCustomDate && data.customDate
      ? format(data.customDate, "dd/MM/yyyy")
      : `Proxima ${dayLabel ?? data.day}`

    alert(`
Agendamento confirmado!

Nivel: ${level}
Dia: ${dayLabel ?? data.day}
Data: ${dateLabel}
Horario: ${data.time}

Nome: ${data.fullName}
Email: ${data.email}
Telefone: ${data.phone}
    `)

    reset({
      day: "seg",
      time: "09:00",
      useCustomDate: false,
      customDate: null,
      fullName: "",
      email: "",
      phone: "",
    })

    onClose()
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ptBR}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 6,
          backgroundColor: "#fff",
          boxShadow: "0 22px 44px rgba(0,0,0,0.12)",
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Stack spacing={0.5}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Agende sua aula
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            Nivel selecionado: <strong>{level}</strong>
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
            }}
          >
            Escolha o dia
          </Typography>

          <Stack
            direction="row"
            sx={{
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {WEEK_DAYS.map((day) => {
              const isSelected = selectedDay === day.value && !useCustomDate

              return (
                <Button
                  key={day.value}
                  size="small"
                  variant="contained"
                  onClick={() => handleSelectDay(day.value)}
                  sx={{
                    minWidth: 56,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 600,
                    backgroundColor: isSelected ? "#3fa85b" : "#f7edd4",
                    color: isSelected ? "#fff" : "#7b5b21",
                    boxShadow: isSelected
                      ? "0 10px 20px rgba(63,168,91,0.25)"
                      : "none",
                    "&:hover": {
                      backgroundColor: isSelected ? "#2f8c4a" : "#f3e4c5",
                    },
                  }}
                >
                  {day.label}
                </Button>
              )
            })}

            <Button
              size="small"
              variant="contained"
              onClick={handleToggleCustomDate}
              sx={{
                minWidth: 90,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: useCustomDate ? "#3fa85b" : "#f7edd4",
                color: useCustomDate ? "#fff" : "#7b5b21",
                boxShadow: useCustomDate
                  ? "0 10px 20px rgba(63,168,91,0.25)"
                  : "none",
                "&:hover": {
                  backgroundColor: useCustomDate ? "#2f8c4a" : "#f3e4c5",
                },
              }}
            >
              Outra data
            </Button>
          </Stack>

          {errors.day?.message && (
            <Typography variant="caption" color="error">
              {errors.day.message}
            </Typography>
          )}
        </Stack>

        {useCustomDate && (
          <Stack spacing={1.5}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
              }}
            >
              Selecione a data
            </Typography>

            <Controller
              control={control}
              name="customDate"
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      size: "small",
                      "aria-placeholder": "Escolha a data",
                      error: Boolean(errors.customDate),
                      helperText: errors.customDate?.message,
                      sx: INPUT_STYLES,
                    },
                  }}
                />
              )}
            />
          </Stack>
        )}

        <Stack spacing={1.5}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
            }}
          >
            Horarios disponiveis
          </Typography>

          <Stack
            direction="row"
            sx={{
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {AVAILABLE_TIMES.map((time) => {
              const isSelected = selectedTime === time

              return (
                <Button
                  key={time}
                  size="small"
                  variant="contained"
                  onClick={() => handleSelectTime(time)}
                  sx={{
                    minWidth: 80,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 600,
                    backgroundColor: isSelected ? "#3fa85b" : "#f7edd4",
                    color: isSelected ? "#fff" : "#7b5b21",
                    boxShadow: isSelected
                      ? "0 10px 20px rgba(63,168,91,0.25)"
                      : "none",
                    "&:hover": {
                      backgroundColor: isSelected ? "#2f8c4a" : "#f3e4c5",
                    },
                  }}
                >
                  {time}
                </Button>
              )
            })}
          </Stack>

          {errors.time?.message && (
            <Typography variant="caption" color="error">
              {errors.time.message}
            </Typography>
          )}
        </Stack>

        <Stack spacing={2}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
            }}
          >
            Dados pessoais
          </Typography>

          <Stack spacing={1}>
            <Typography variant="body2">Nome completo</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Seu nome"
              {...register("fullName")}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName?.message}
              sx={INPUT_STYLES}
            />
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
          >
            <Stack spacing={1} sx={{ flex: 1 }}>
              <Typography variant="body2">Email</Typography>
              <TextField
                fullWidth
                size="small"
                type="email"
                placeholder="email@email.com"
                {...register("email")}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                sx={INPUT_STYLES}
              />
            </Stack>

            <Stack spacing={1} sx={{ flex: 1 }}>
              <Typography variant="body2">Telefone</Typography>
              <TextField
                fullWidth
                size="small"
                type="tel"
                placeholder="(00) 00000-0000"
                {...register("phone")}
                error={Boolean(errors.phone)}
                helperText={errors.phone?.message}
                sx={INPUT_STYLES}
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack spacing={1} sx={{ mt: 1 }}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              py: 1.6,
              fontWeight: 700,
              borderRadius: "999px",
              textTransform: "none",
              backgroundColor: "#3fa85b",
              boxShadow: "0 12px 20px rgba(63,168,91,0.3)",
              "&:hover": {
                backgroundColor: "#2f8c4a",
              },
            }}
          >
            Confirmar agendamento
          </Button>

          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Voce recebera a confirmacao por e-mail ou WhatsApp
          </Typography>
        </Stack>
      </Box>
    </LocalizationProvider>
  )
}

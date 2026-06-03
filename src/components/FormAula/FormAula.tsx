import { useState } from "react"
import { Stack, Typography, Modal, Box, Divider } from "@mui/material"
import { useForm, Controller } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion"
import type { LessonsScheduleProps, LessonFormData } from "./FormAula.types"
import { styles, weekDays, defaultLessonTypes } from "./FormAula.styles"
import { Button } from "@/components/Button/Button"

export function FormAula({ className }: LessonsScheduleProps) {
    const [selectedLesson, setSelectedLesson] = useState("iniciante")
    const [selectedDay, setSelectedDay] = useState(3)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [_, setSubmittedData] = useState<LessonFormData | null>(null)

    const { control, handleSubmit } = useForm<LessonFormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            experience: "",
        },
    })

    const currentLesson = defaultLessonTypes.find(
        (l) => l.id === selectedLesson
    )!

    const onSubmit = (data: LessonFormData) => {
        setSubmittedData(data)
        setConfirmOpen(true)
    }

    return (
        <section
            id="aulas"
            className={`${styles.section.className} ${className || ""}`}
        >
            <Stack
                spacing={2}
                sx={{
                    maxWidth: "1100px",
                    mx: "auto",
                }}
            >
                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={4}
                    alignItems="flex-start"
                >
                    <Stack spacing={3} sx={{ flex: 1 }}>
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                color: "oklch(0.25 0.04 220)",
                                fontFamily: '"Raleway", "Inter", sans-serif',
                            }}
                        >
                            Escolha seu nível
                        </Typography>

                        {defaultLessonTypes.map((lesson) => (
                            <Stack
                                key={lesson.id}
                                spacing={2}
                                onClick={() => setSelectedLesson(lesson.id)}
                                sx={{
                                    p: 2.5,
                                    borderRadius: "24px",
                                    cursor: "pointer",
                                    transition: "0.3s ease",
                                    borderLeft: `4px solid ${lesson.color}`,

                                    ...(selectedLesson === lesson.id
                                        ? styles.lessonCard.active
                                        : styles.lessonCard.inactive),
                                }}
                            >
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack spacing={0.5}>
                                        <Typography
                                            sx={{
                                                fontSize: "1.25rem",
                                                fontWeight: 700,
                                                color: styles.lessonCard.title.color,
                                                fontFamily: '"Raleway", "Inter", sans-serif',
                                            }}
                                        >
                                            {lesson.title}
                                        </Typography>

                                        <Typography sx={{ color: lesson.color }}>
                                            {lesson.subtitle}
                                        </Typography>
                                    </Stack>

                                    <Stack spacing={0.5} textAlign="right">
                                        <Typography
                                            sx={{
                                                fontSize: "1.5rem",
                                                fontWeight: 700,
                                                color: lesson.color,
                                                fontFamily: '"Raleway", "Inter", sans-serif',
                                            }}
                                        >
                                            R$ {lesson.price}
                                        </Typography>

                                        <Typography sx={{ fontSize: 12 }}>
                                            {lesson.duration}
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Typography
                                    sx={{
                                        color: styles.lessonCard.description.color,
                                        fontFamily: '"Raleway", "Inter", sans-serif',
                                    }}
                                >
                                    {lesson.description}
                                </Typography>

                                <AnimatePresence>
                                    {selectedLesson === lesson.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{
                                                duration: 0.35,
                                                ease: "easeInOut",
                                            }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <Stack
                                                spacing={2}
                                                sx={{
                                                    pt: 3,
                                                    borderTop: "1px solid oklch(0.9 0.02 200)",
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: 700 }}>
                                                    Incluso:
                                                </Typography>

                                                <Stack
                                                    direction="row"
                                                    flexWrap="wrap"
                                                    sx={{ gap: 1 }}
                                                >
                                                    {lesson.includes.map((item, i) => (
                                                        <Stack
                                                            key={i}
                                                            direction="row"
                                                            spacing={1}
                                                            alignItems="center"
                                                            sx={{ width: "48%" }}
                                                        >
                                                            <Stack
                                                                sx={{
                                                                    width: 8,
                                                                    height: 8,
                                                                    borderRadius: "50%",
                                                                    background: lesson.color,
                                                                    flexShrink: 0,
                                                                }}
                                                            />

                                                            <Typography sx={{ fontSize: 14 }}>
                                                                {item}
                                                            </Typography>
                                                        </Stack>
                                                    ))}
                                                </Stack>
                                            </Stack>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Stack>
                        ))}
                    </Stack>

                    <Stack
                        spacing={4}
                        sx={{
                            flex: 1,
                            width: "100%",
                            p: 2.5,
                            borderRadius: "24px",
                            background: styles.bookingForm.wrapper.background,
                            boxShadow: styles.bookingForm.wrapper.boxShadow,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                color: styles.bookingForm.title.color,
                                fontFamily: '"Raleway", "Inter", sans-serif',
                            }}
                        >
                            Agende sua Aula
                        </Typography>

                        <Stack spacing={2}>
                            <Typography sx={{ fontWeight: 600 }}>
                                Escolha o dia
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                {weekDays.map((day, i) => (
                                    <Stack
                                        key={day}
                                        component="button"
                                        onClick={() => setSelectedDay(i)}
                                        sx={{
                                            flex: 1,
                                            py: 1.5,
                                            borderRadius: "14px",
                                            border: "none",
                                            cursor: "pointer",
                                            background:
                                                selectedDay === i
                                                    ? currentLesson.color
                                                    : "oklch(0.96 0.02 200)",
                                            color:
                                                selectedDay === i
                                                    ? "white"
                                                    : "oklch(0.4 0.04 220)",
                                        }}
                                    >
                                        {day}
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography sx={{ fontWeight: 600 }}>
                                Horários disponíveis
                            </Typography>

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                {currentLesson.schedule.map((time) => (
                                    <Stack
                                        key={time}
                                        component="button"
                                        onClick={() => setSelectedTime(time)}
                                        sx={{
                                            px: 3,
                                            py: 1,
                                            borderRadius: "999px",
                                            border: "none",
                                            cursor: "pointer",
                                            background:
                                                selectedTime === time
                                                    ? currentLesson.color
                                                    : "oklch(0.96 0.02 200)",
                                            color:
                                                selectedTime === time
                                                    ? "white"
                                                    : "oklch(0.4 0.04 220)",
                                        }}
                                    >
                                        {time}
                                    </Stack>
                                ))}
                            </Stack>
                        </Stack>

                        <Stack spacing={3}>
                            <Stack spacing={1}>
                                <Typography sx={{ fontWeight: 600 }}>
                                    Nome completo <span style={{ color: "#d32f2f" }}>*</span>
                                </Typography>

                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "Nome obrigatório" }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <Stack
                                                component="input"
                                                {...field}
                                                placeholder="Seu nome"
                                                sx={{
                                                    px: 2,
                                                    py: 2,
                                                    borderRadius: "14px",
                                                    border: "none",
                                                    background:
                                                        styles.bookingForm.input.background,
                                                }}
                                            />
                                            <Typography variant="caption" color="error" sx={{ minHeight: 18 }}>
                                                {fieldState.error?.message || " "}
                                            </Typography>
                                        </>
                                    )}
                                />
                            </Stack>

                            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        E-mail <span style={{ color: "#d32f2f" }}>*</span>
                                    </Typography>

                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: "E-mail obrigatório",
                                            pattern: { value: /\S+@\S+\.\S+/, message: "E-mail inválido" },
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <Stack
                                                    component="input"
                                                    {...field}
                                                    placeholder="seu@email.com"
                                                    sx={{
                                                        px: 2,
                                                        py: 2,
                                                        borderRadius: "14px",
                                                        border: "none",
                                                        background:
                                                            styles.bookingForm.input.background,
                                                    }}
                                                />
                                                <Typography variant="caption" color="error" sx={{ minHeight: 18 }}>
                                                    {fieldState.error?.message || " "}
                                                </Typography>
                                            </>
                                        )}
                                    />
                                </Stack>

                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        Telefone <span style={{ color: "#d32f2f" }}>*</span>
                                    </Typography>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{
                                            required: "Telefone obrigatório",
                                            pattern: { value: /^\(\d{2}\) \d{5}-\d{4}$/, message: "Telefone inválido" },
                                        }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <Stack
                                                    component="input"
                                                    {...field}
                                                    placeholder="(00) 00000-0000"
                                                    sx={{
                                                        px: 2,
                                                        py: 2,
                                                        borderRadius: "14px",
                                                        border: "none",
                                                        background:
                                                            styles.bookingForm.input.background,
                                                    }}
                                                />
                                                <Typography variant="caption" color="error" sx={{ minHeight: 18 }}>
                                                    {fieldState.error?.message || " "}
                                                </Typography>
                                            </>
                                        )}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Button tamanho="lg" onClick={handleSubmit(onSubmit)}>
                            Confirmar Agendamento
                        </Button>

                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: 12,
                                color: styles.bookingForm.note.color,
                                fontFamily: '"Raleway", "Inter", sans-serif',
                            }}
                        >
                            Você receberá a confirmação por e-mail e WhatsApp
                        </Typography>
                        <Modal
                            open={confirmOpen}
                            onClose={() => setConfirmOpen(false)}
                            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                        >
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: "16px",
                                    background: "white",
                                    maxWidth: 400,
                                    width: "90%",
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <Stack spacing={2} sx={{ alignItems: "center" }}>
                                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                        Reserva confirmada!
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Você receberá um email com mais detalhes
                                    </Typography>
                                </Stack>

                                <Divider sx={{ my: 4 }} />

                                <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    spacing={4}
                                    sx={{ justifyContent: "center" }}
                                >
                                    <Button
                                        onClick={() => setConfirmOpen(false)}
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
                                </Stack>
                            </Box>
                        </Modal>
                    </Stack>
                </Stack>
            </Stack>
        </section>
    )
}
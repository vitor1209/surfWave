"use client"

import { useState } from "react"
import { Stack, Typography } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"

import type { LessonsScheduleProps, LessonFormData } from "./FormAula.types"

import { styles, weekDays, defaultLessonTypes } from "./FormAula.styles"

export function FormAula({ className }: LessonsScheduleProps) {
    const [selectedLesson, setSelectedLesson] = useState("iniciante")
    const [selectedDay, setSelectedDay] = useState(3)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)

    const [formData, setFormData] = useState<LessonFormData>({
        name: "",
        email: "",
        phone: "",
        experience: "",
    })

    const currentLesson = defaultLessonTypes.find(
        (l) => l.id === selectedLesson
    )!

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
                {/* CONTEUDO */}
                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={4}
                    alignItems="flex-start"
                >
                    {/* ESQUERDA */}
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

                                {/* ANIMAÇÃO CORRIGIDA */}
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

                    {/* DIREITA (100% RESTAURADA) */}
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

                        {/* DIAS */}
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

                        {/* HORÁRIOS */}
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

                        {/* INPUTS */}
                        <Stack spacing={3}>
                            <Stack spacing={1}>
                                <Typography sx={{ fontWeight: 600 }}>
                                    Nome completo
                                </Typography>

                                <Stack
                                    component="input"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
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
                            </Stack>

                            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        E-mail
                                    </Typography>

                                    <Stack
                                        component="input"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
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
                                </Stack>

                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        Telefone
                                    </Typography>

                                    <Stack
                                        component="input"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
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
                                </Stack>
                            </Stack>
                        </Stack>

                        {/* BOTÃO */}
                        <Stack
                            component="button"
                            sx={{
                                py: 2,
                                borderRadius: "16px",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: 700,
                                background: currentLesson.color,
                                color: "white",
                                boxShadow: `0 8px 25px ${currentLesson.color}50`,
                            }}
                        >
                            Confirmar Agendamento
                        </Stack>

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
                    </Stack>
                </Stack>
            </Stack>
        </section>
    )
}
"use client"

import { useState } from "react"

const lessonTypes = [
    {
        id: "iniciante",
        title: "Iniciante",
        subtitle: "Primeira onda",
        description: "Ideal para quem nunca surfou. Aprenda as técnicas básicas em águas calmas.",
        duration: "2 horas",
        price: 150,
        includes: ["Prancha e equipamentos", "Instrutor exclusivo", "Fotos da aula", "Seguro"],
        schedule: ["08:00", "10:30", "14:00", "16:30"],
        color: "oklch(0.65 0.18 180)"
    },
    {
        id: "intermediario",
        title: "Intermediário",
        subtitle: "Evolução",
        description: "Para quem já se levanta na prancha. Aprimore manobras e leitura das ondas.",
        duration: "2.5 horas",
        price: 200,
        includes: ["Prancha performance", "Análise de vídeo", "Teoria avançada", "Certificado"],
        schedule: ["07:00", "10:00", "15:00"],
        color: "oklch(0.55 0.15 220)"
    },
    {
        id: "avancado",
        title: "Avançado",
        subtitle: "Performance",
        description: "Treinamento competitivo. Manobras aéreas e técnicas de competição.",
        duration: "3 horas",
        price: 350,
        includes: ["Equipamento profissional", "Coach certificado", "Análise detalhada", "Plano de treino"],
        schedule: ["06:00", "14:00"],
        color: "oklch(0.7 0.18 50)"
    }
]

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]

export function LessonsSchedule() {
    const [selectedLesson, setSelectedLesson] = useState("iniciante")
    const [selectedDay, setSelectedDay] = useState(3)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: ""
    })

    const currentLesson = lessonTypes.find(l => l.id === selectedLesson)!

    return (
        <section
            id="aulas"
            className="relative py-20 px-4 md:px-8"
            style={{
                background: 'linear-gradient(180deg, oklch(0.98 0.02 210) 0%, oklch(0.92 0.04 200) 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span
                        className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                        style={{
                            background: 'oklch(0.65 0.18 180 / 0.15)',
                            color: 'oklch(0.5 0.15 180)'
                        }}
                    >
                        Aprenda a Surfar
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-4 text-balance"
                        style={{ color: 'oklch(0.2 0.03 230)' }}
                    >
                        Aulas de Surf
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto text-pretty"
                        style={{ color: 'oklch(0.4 0.05 220)' }}
                    >
                        Instrutores certificados para todos os níveis. Agende sua aula e comece sua jornada no surf.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Lesson Types */}
                    <div className="space-y-4">
                        <h3
                            className="text-xl font-bold mb-6"
                            style={{ color: 'oklch(0.25 0.04 220)' }}
                        >
                            Escolha seu nível
                        </h3>

                        {lessonTypes.map((lesson) => (
                            <div
                                key={lesson.id}
                                onClick={() => setSelectedLesson(lesson.id)}
                                className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300"
                                style={{
                                    background: selectedLesson === lesson.id
                                        ? 'white'
                                        : 'oklch(0.98 0.01 85 / 0.5)',
                                    boxShadow: selectedLesson === lesson.id
                                        ? '0 8px 30px rgba(0,0,0,0.12)'
                                        : 'none',
                                    borderLeft: `4px solid ${lesson.color}`
                                }}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4
                                            className="text-lg font-bold"
                                            style={{ color: 'oklch(0.2 0.03 230)' }}
                                        >
                                            {lesson.title}
                                        </h4>
                                        <span
                                            className="text-sm"
                                            style={{ color: lesson.color }}
                                        >
                                            {lesson.subtitle}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span
                                            className="text-2xl font-bold"
                                            style={{ color: lesson.color }}
                                        >
                                            R$ {lesson.price}
                                        </span>
                                        <span
                                            className="block text-xs"
                                            style={{ color: 'oklch(0.5 0.04 220)' }}
                                        >
                                            {lesson.duration}
                                        </span>
                                    </div>
                                </div>
                                <p
                                    className="text-sm mb-4"
                                    style={{ color: 'oklch(0.45 0.04 220)' }}
                                >
                                    {lesson.description}
                                </p>

                                {selectedLesson === lesson.id && (
                                    <div className="mt-4 pt-4 border-t" style={{ borderColor: 'oklch(0.9 0.02 200)' }}>
                                        <h5
                                            className="text-sm font-bold mb-2"
                                            style={{ color: 'oklch(0.3 0.04 220)' }}
                                        >
                                            Incluso:
                                        </h5>
                                        <div className="grid grid-cols-2 gap-2">
                                            {lesson.includes.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 text-sm"
                                                    style={{ color: 'oklch(0.45 0.04 220)' }}
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                        <circle cx="7" cy="7" r="7" fill={lesson.color} fillOpacity="0.2" />
                                                        <path d="M4 7L6 9L10 5" stroke={lesson.color} strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Booking Form */}
                    <div
                        className="p-8 rounded-2xl"
                        style={{
                            background: 'white',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3
                            className="text-xl font-bold mb-6"
                            style={{ color: 'oklch(0.25 0.04 220)' }}
                        >
                            Agende sua Aula
                        </h3>

                        {/* Calendar */}
                        <div className="mb-6">
                            <label
                                className="block text-sm font-medium mb-3"
                                style={{ color: 'oklch(0.35 0.04 220)' }}
                            >
                                Escolha o dia
                            </label>
                            <div className="flex gap-2">
                                {weekDays.map((day, i) => (
                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(i)}
                                        className="flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                                        style={{
                                            background: selectedDay === i
                                                ? currentLesson.color
                                                : 'oklch(0.96 0.02 200)',
                                            color: selectedDay === i
                                                ? 'white'
                                                : 'oklch(0.4 0.04 220)'
                                        }}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div className="mb-6">
                            <label
                                className="block text-sm font-medium mb-3"
                                style={{ color: 'oklch(0.35 0.04 220)' }}
                            >
                                Horários disponíveis
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {currentLesson.schedule.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                                        style={{
                                            background: selectedTime === time
                                                ? currentLesson.color
                                                : 'oklch(0.96 0.02 200)',
                                            color: selectedTime === time
                                                ? 'white'
                                                : 'oklch(0.4 0.04 220)',
                                            boxShadow: selectedTime === time
                                                ? `0 4px 12px ${currentLesson.color}40`
                                                : 'none'
                                        }}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <label
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'oklch(0.35 0.04 220)' }}
                                >
                                    Nome completo
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                                    style={{
                                        background: 'oklch(0.96 0.02 200)',
                                        border: '2px solid transparent'
                                    }}
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        style={{ color: 'oklch(0.35 0.04 220)' }}
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                                        style={{ background: 'oklch(0.96 0.02 200)' }}
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium mb-2"
                                        style={{ color: 'oklch(0.35 0.04 220)' }}
                                    >
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                                        style={{ background: 'oklch(0.96 0.02 200)' }}
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: currentLesson.color,
                                color: 'white',
                                boxShadow: `0 8px 25px ${currentLesson.color}50`
                            }}
                        >
                            Confirmar Agendamento
                        </button>

                        <p
                            className="text-center text-xs mt-4"
                            style={{ color: 'oklch(0.55 0.04 220)' }}
                        >
                            Você receberá a confirmação por e-mail e WhatsApp
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

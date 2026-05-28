"use client"

import { useState } from "react"
import type { SocialContactBarProps } from "./SocialContact.types"
import { styles, defaultContactInfo, whatsappMessage } from "./SocialContact.styles"

export function SocialContactBar({ className }: SocialContactBarProps) {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <>
      {/* Fixed Side Bar */}
      <div className={`${styles.bar.wrapper} ${className || ""}`}>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${defaultContactInfo.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button.base}
          style={styles.button.whatsapp}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className={styles.tooltip.className} style={{ background: styles.tooltip.background, color: styles.tooltip.color }}>Fale conosco</span>
        </a>

        {/* Instagram */}
        <a
          href={`https://instagram.com/${defaultContactInfo.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button.base}
          style={styles.button.instagram}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className={styles.tooltip.className} style={{ background: styles.tooltip.background, color: styles.tooltip.color }}>@{defaultContactInfo.instagramHandle}</span>
        </a>

        {/* Google Maps */}
        <button
          onClick={() => setIsMapOpen(true)}
          className={styles.button.base}
          style={styles.button.maps}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className={styles.tooltip.className} style={{ background: styles.tooltip.background, color: styles.tooltip.color }}>Como chegar</span>
        </button>
      </div>

      {/* Map Modal */}
      {isMapOpen && (
        <div className={styles.modal.backdrop.className} style={{ background: styles.modal.backdrop.background }} onClick={() => setIsMapOpen(false)}>
          <div className={styles.modal.content.className} style={{ background: styles.modal.content.background }} onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className={styles.modal.header.className} style={{ borderBottom: styles.modal.header.borderBottom }}>
              <div>
                <h3 className={styles.modal.title.className} style={{ color: styles.modal.title.color }}>Nossa Localizacao</h3>
                <p className={styles.modal.subtitle.className} style={{ color: styles.modal.subtitle.color }}>{defaultContactInfo.address}</p>
              </div>
              <button onClick={() => setIsMapOpen(false)} className={styles.modal.closeButton.className} style={{ background: styles.modal.closeButton.background }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="oklch(0.4 0.04 220)" strokeWidth="2">
                  <path d="M15 5L5 15M5 5l10 10" />
                </svg>
              </button>
            </div>

            {/* Map Placeholder */}
            <div className={styles.modal.mapPlaceholder.className} style={{ background: styles.modal.mapPlaceholder.background }}>
              <div className="text-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mx-auto mb-4">
                  <circle cx="30" cy="24" r="8" stroke="oklch(0.55 0.18 25)" strokeWidth="3" fill="none" />
                  <path d="M30 10C21.16 10 14 17.16 14 26c0 11.25 16 28 16 28s16-16.75 16-28c0-8.84-7.16-16-16-16z" stroke="oklch(0.55 0.18 25)" strokeWidth="3" fill="none" />
                </svg>
                <p style={{ color: "oklch(0.4 0.05 220)" }}>Mapa interativo seria integrado aqui</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.modal.mapButton.className} style={{ background: styles.modal.mapButton.background, color: styles.modal.mapButton.color }}>
                  Abrir no Google Maps
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12L12 4M12 4H6M12 4V10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info */}
            <div className={styles.modal.infoGrid}>
              {[
                { icon: "clock", label: "Horario", value: defaultContactInfo.hours },
                { icon: "email", label: "E-mail", value: defaultContactInfo.email },
                { icon: "phone", label: "Telefone", value: defaultContactInfo.phone }
              ].map((item) => (
                <div key={item.icon} className={styles.modal.infoItem.wrapper}>
                  <div className={styles.modal.infoItem.iconWrapper.className} style={{ background: styles.modal.infoItem.iconWrapper.background }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="oklch(0.55 0.15 220)" strokeWidth="1.5">
                      {item.icon === "clock" && <><circle cx="10" cy="10" r="8" /><path d="M10 5V10L13 12" /></>}
                      {item.icon === "email" && <><path d="M3 5H17V15H3V5Z" /><path d="M3 5L10 11L17 5" /></>}
                      {item.icon === "phone" && <path d="M3 4C3 3.45 3.45 3 4 3H7L9 7L7 9C8 11 9 12 11 13L13 11L17 13V16C17 16.55 16.55 17 16 17C9 17 3 11 3 4Z" />}
                    </svg>
                  </div>
                  <div>
                    <p className={styles.modal.infoItem.label.className} style={{ color: styles.modal.infoItem.label.color }}>{item.label}</p>
                    <p className={styles.modal.infoItem.value.className} style={{ color: styles.modal.infoItem.value.color }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

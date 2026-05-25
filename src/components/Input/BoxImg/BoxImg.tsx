import { useEffect, useState, type ChangeEvent } from "react"
import { Box, Typography } from "@mui/material"
import { useController, type Control, type FieldValues, type Path } from "react-hook-form"

type InputIMGProps<FormType extends FieldValues> = {
    name: Path<FormType>;
    label?: string;
    control: Control<FormType>;
    defaultImage?: string;
    readOnly?: boolean;
    width?: number;
    height?: number;
};

export function InputImagem<FormType extends FieldValues>({
    name,
    label,
    control,
    defaultImage,
    readOnly,
    width = 43,
    height = 31.563,
}: InputIMGProps<FormType>) {

    const { field } = useController({
        name,
        control,
        defaultValue: undefined,
    });

    const [preview, setPreview] = useState<string | null>(defaultImage ?? null)

    useEffect(() => {
        if (
            typeof field.value === "object" &&
            field.value !== null &&
            "name" in field.value &&
            "size" in field.value
        ) {
            const arquivo = field.value as File
            const urlPreview = URL.createObjectURL(arquivo)
            setPreview(urlPreview)

            return () => URL.revokeObjectURL(urlPreview)
        }

        if (typeof field.value === "string") {
            setPreview(field.value)
            return
        }

        setPreview(defaultImage ?? null)
    }, [defaultImage, field.value])

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (readOnly) return

        const file = event.target.files?.[0]
        if (file) {
            field.onChange(file)
        }
    }

    return (
        <Box>
            {label && (
                <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, mb: 1 }}>
                    {label}
                </Typography>
            )}

            <Box
                component="label"
                sx={{
                    width: `${width}rem`,
                    height: `${height}rem`,
                    borderRadius: "16px",
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: readOnly ? "default" : "pointer",
                    overflow: "hidden",
                    border: "2px dashed #ccc",
                }}
            >
                {preview ? (
                    <Box
                        component="img"
                        src={preview}
                        alt="Prévia"
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    <Typography>Inserir Imagem</Typography>
                )}

                {!readOnly && (
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                    />
                )}
            </Box>
        </Box>
    )
}

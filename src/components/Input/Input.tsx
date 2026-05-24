import { InputAdornment, Stack, Typography } from "@mui/material"
import { Controller, type FieldValues } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { type Ref } from "react"

import * as Styled from "./Input.styled"
import type { EstiloInput, InputProps, MaskedInputComponentProps } from "./Input.types"

const ComponenteMascara = ({
    inputRef,
    value,
    ...props
}: MaskedInputComponentProps & { inputRef?: Ref<HTMLInputElement> }) => (
    <IMaskInput
        {...props}
        overwrite={false}
        lazy={false}
        inputRef={inputRef}
        value={String(value ?? "")}
    />
)

export const Input = <T extends FieldValues>({
    name,
    control,
    Icon,
    label,
    mask,
    ...props
}: InputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const propriedadesPadrao: EstiloInput = {
                    ...props,
                    ...field,
                    id: name,
                    name,
                    value: field.value || "",
                    erro: error?.message,
                    inputRef: field.ref,
                }
                return (
                    <Stack
                        sx={{
                            position: "relative",
                            "&:focus-within .input-label": {
                                transform: "scale(1.1)",
                                transition: "transform 0.2s ease",
                            },
                        }}
                    >
                        {label && (
                            <Typography
                                className="input-label"
                                variant="subtitle1"
                                color="text.primary"
                                sx={{
                                    display: "inline-block",
                                    transition: "transform 0.2s ease",
                                    fontWeight: 500,
                                    transformOrigin: "left center",
                                }}
                            >
                                {label}
                            </Typography>
                        )}

                        <Styled.InputForm
                            {...propriedadesPadrao}
                            inputComponent={mask ? ComponenteMascara : undefined}
                            inputProps={mask ? { mask } : {}}
                            endAdornment={
                                <InputAdornment position="end">
                                    {Icon && <Icon size={20} color="#D92D20" />}
                                </InputAdornment>
                            }
                        />

                        <Typography variant="body2" color="error.main">
                            {error?.message || " "}
                        </Typography>
                    </Stack>
                )
            }}
        />
    )
}
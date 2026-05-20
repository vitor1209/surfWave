import type { EstiloInput, InputProps, MaskedInputComponentProps } from "./Input.types"
import { InputAdornment, Stack, Typography } from "@mui/material"
import * as Styled from "./Input.styled"
import { Controller, type FieldValues } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { forwardRef, } from "react"

const MaskedInputComponent = forwardRef<HTMLInputElement, MaskedInputComponentProps>(
    ({ value, ...props }, ref) => (
        <IMaskInput
            {...props}
            overwrite={false}
            lazy={false}
            inputRef={ref}
            value={String(value ?? "")}
            // onAccept={(val) => {
            //     if (onChange)
            //         onChange({ target: { value: val } } as unknown as ChangeEvent<HTMLInputElement>)
            // }}
        />
    )
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
                const defaultProps: EstiloInput = {
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
                                color="#0A0A0A"
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
                            {...defaultProps}
                            inputComponent={mask ? MaskedInputComponent : undefined}
                            inputProps={mask ? { mask } : {}}
                            endAdornment={
                                <InputAdornment position="end">
                                    {Icon && <Icon size={20} color="#FF2222" />}
                                </InputAdornment>
                            }
                        />

                        <Typography
                            variant="body2"
                            color="#A91208"
                        >
                            {error?.message || " "}
                        </Typography>
                    </Stack>
                )
            }}
        />
    )
}
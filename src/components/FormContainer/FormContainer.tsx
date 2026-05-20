import { Stack, Typography } from "@mui/material";
import * as styled from "./Form.styled";
import { Button } from "../Button/Button";
import { useState } from "react";
// import { LogoCultiva } from "../../assets/index";
import { useSearchParams } from "react-router-dom";
import type { ContainerFormProps } from "./Form.types";
import { TabsApple } from "./TabsApple/TabsApple";

export default function ContainerForm({
    children,
    childrenSecund,
    acao,
    onTabChange,
    initialTab
}: ContainerFormProps) {

    const tabs: { value: "Consumidor" | "Produtor"; label: string }[] = [
        { value: "Consumidor", label: "Consumidor" },
        { value: "Produtor", label: "Produtor" },
    ];

    const [searchParams, setSearchParams] = useSearchParams();
    const tabParam = searchParams.get("Tab");

    const initialIndex = tabs.findIndex(
        (tab) =>
            tab.label.toLowerCase() ===
            (initialTab?.toLowerCase() || tabParam?.toLowerCase())
    );

    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
        setSearchParams({ Tab: tabs[newValue].label });
        if (onTabChange) onTabChange(tabs[newValue].value);
    };

    const notCadastro = acao !== "Cadastro";
    const isReset = acao === "Reset" || acao === "Token";
    const isToken = acao === "Token";
    const showTabs = !isReset;

    return (
        <Stack>
            <styled.ImgStack acao={acao}>
                {/* <img className="img" src={LogoCultiva} alt="Logo Cultiva" width={120} /> */}
            </styled.ImgStack>

            <styled.FormContainer acao={acao}>
                {notCadastro ? (
                    <>
                        <Stack sx={{ px: "6%", alignSelf: "flex-start" }}>
                            {isToken ? (
                                <Typography variant="body1">Digite sua nova Senha!</Typography>
                            ) : isReset ? (
                                <Typography variant="body1">Digite seu email!</Typography>
                            ) : (
                                <Typography variant="body1">Bem Vindo de Volta!</Typography>
                            )}
                        </Stack>

                        {showTabs && (
                            <TabsApple
                                value={tabIndex}
                                onChange={handleChange}
                                tabs={["Consumidor", "Produtor"]}
                                sx={{ width: "90%", alignSelf: "center" }}
                            />
                        )}

                        <Stack component="form" sx={{ display: "flex", flexDirection: "column", gap: 3, width: "90%" }}>
                            {children}
                        </Stack>
                    </>
                ) : (
                    <Stack
                        sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch", width: "100%", mt: 2, height: "100%", flex: 1 }}
                    >
                        <Stack
                            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", alignItems: { xs: "center", md: "stretch" }, mt: 2, flex: 1, overflow: "auto", gap: { xs: 3, md: 2 } }}
                        >
                            <Stack component="form" sx={{ display: "flex", flexDirection: "column", gap: 3, width: { xs: "90%", md: "45%" } }}>
                                <Stack sx={{ px: "6%", alignSelf: "flex-start" }}>
                                    <Typography variant="body1">Bem Vindo de Volta!</Typography>
                                </Stack>

                                {showTabs && (
                                    <TabsApple
                                        value={tabIndex}
                                        onChange={handleChange}
                                        tabs={["Consumidor", "Produtor"]}
                                        sx={{ width: "90%", alignSelf: "center" }}
                                    />
                                )}

                                {children}
                            </Stack>

                            <Stack component="form" sx={{ display: "flex", flexDirection: "column", gap: 3, width: { xs: "90%", md: "44%" } }}>
                                {childrenSecund}
                            </Stack>
                        </Stack>
                    </Stack>
                )}

                {acao === 'Login' && (
                    <Stack
                        sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", gap: 2, p: "1% 3%", width: "100%", mt: 1 }}
                    >
                        <Button to="/ResetSenha" tamanho="sm" variante="ButtonLinkGreen">
                            Esqueci minha senha
                        </Button>
                        <Button tamanho="sm" variante="ButtonLinkGreen" to="/Cadastro">
                            Criar uma conta
                        </Button>
                    </Stack>
                )}
            </styled.FormContainer>
        </Stack>
    );
}

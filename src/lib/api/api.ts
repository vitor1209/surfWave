type RequestParams = Record<string, string | number | boolean | null | undefined>;

type ApiResponse<T> = {
    data: T;
};

type GetConfig = {
    params?: RequestParams;
};

const buildUrl = (path: string, params?: RequestParams) => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost";
    const url = new URL(path, baseUrl);

    Object.entries(params ?? {}).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
            url.searchParams.set(key, String(value));
        }
    });

    return url;
};

export const api = {
    async get<T = unknown>(path: string, config?: GetConfig): Promise<ApiResponse<{ data: T }>> {
        const response = await fetch(buildUrl(path, config?.params), {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json().catch(() => null);

        if (payload && typeof payload === "object" && "data" in payload) {
            return { data: payload as { data: T } };
        }

        return { data: { data: (payload ?? []) as T } };
    },
};
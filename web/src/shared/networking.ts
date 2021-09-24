export const networking = {
  get: async (url: string) => {
    return await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  },
};

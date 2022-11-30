export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzNjM0YTc4MC0wMDI4LTQ1ODktYjEzMC1hZDRmNWY2NjY2ZmYiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2OTgxMTg3OCwiZXhwIjoxNjcwNDE2Njc4fQ.GBickciQXEcWiyztRP6Ej8crXnObnrpuslSRp--lxpY"
export const createMeeting = async ({ token }) => {
    const res = await fetch('https://api.videosdk.live/v1/meetings', {
        method: "POST",
        headers: {
            authorization: `${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ region: "eu001" }),
    });

    const { meetingId } = await res.json();
    return meetingId;
};
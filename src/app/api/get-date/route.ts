const ethiopianDate = require("ethiopian-date");

interface DateRequest {
    year: number;
    month: number;
    day: number;
}

export async function POST(req: Request) {
    try {
        // Parse the request body
        const { year, month, day }: DateRequest = await req.json();

        // Validate the input
        if (!year || !month || !day) {
            return new Response(
                JSON.stringify({ error: "Missing year, month, or day" }),
                {
                    status: 400,
                }
            );
        }

        // Call the conversion function (assuming EthDateTime exists and is imported)
        const ethDate = ethiopianDate.toEthiopian(year, month, day);

        // Send the response with the Ethiopian date
        return new Response(
            JSON.stringify({
                year: ethDate[0],
                month: ethDate[1],
                day: ethDate[2],
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Failed to convert date" }),
            {
                status: 500,
            }
        );
    }
}

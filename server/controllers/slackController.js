import axios from "axios";

const postToSlack = async (summary) => {
    try {
        await axios.post(process.env.SLACK_WEBHOOK_URL, {
            text: `📝 *To-Do Summary:*\n${summary}`,
        });
    } catch (error) {
        throw new Error("Slack webhook failed");
    }
};

export { postToSlack };

export class Feedback {
    feedbackId: number; // TypeScript uses `number` instead of `Long`
    message: string;
    visible: boolean; // TypeScript uses `boolean` instead of `Boolean`

    constructor(feedbackId: number, message: string, visible: boolean) {
        this.feedbackId = feedbackId;
        this.message = message;
        this.visible = visible;}}

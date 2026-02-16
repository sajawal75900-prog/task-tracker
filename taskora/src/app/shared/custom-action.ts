export class CustomAction {
    title: string;
    icon: string;
    color: string;
    raisedButton = false;
    constructor(title: string, icon: string = null, color: string = null, raisedButton = false) {
        this.title = title;
        this.color = color ?? 'primary';
        // this.icon = icon ?? 'build';
        this.icon = icon;
        this.raisedButton = raisedButton;
    }
}

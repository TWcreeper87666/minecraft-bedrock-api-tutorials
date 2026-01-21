import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
/*
server-ui : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui?view=minecraft-bedrock-stable
*/
export async function main(player) {
    await form_actionForm(player); // 按鈕表單
    await form_modalForm(player); // 表單
    await form_handle(player); // 表單處理範例
}
async function form_actionForm(player) {
    // 把能用的都列出來了，雖然如果你有自動補全的話根本不需要🤣
    const form = new ActionFormData()
        .title("§l§1按鈕表單 actionForm")
        .body("body")
        .button("button1")
        .button("button2") // and more
        .divider()
        .header("header")
        .label("label");
    const { canceled, selection } = await form.show(player);
    if (canceled)
        return;
    player.sendMessage(`你選擇了: 第 ${selection + 1} 個按鈕`);
}
async function form_modalForm(player) {
    // 把能用的都列出來了，雖然如果你有自動補全的話根本不需要🤣
    const form = new ModalFormData()
        .title("§l§1表單 modalForm")
        .header("header")
        .divider()
        .dropdown("dropdown", ["item 1", "item 2", "item 3"], {
        defaultValueIndex: 2,
    })
        .label("label")
        .slider("slider", 0, 100, { defaultValue: 50 })
        .submitButton("submitButton")
        .textField("textfield", "placeholder", { defaultValue: "defaultValue" })
        .toggle("toggle", { defaultValue: true });
    await form.show(player);
}
async function form_handle(player) {
    const form = new ModalFormData()
        .title("§l§1表單處理")
        .textField("請輸入數字", "", { defaultValue: "0" })
        .toggle("輸出到聊天室", { defaultValue: true });
    const { canceled, formValues } = await form.show(player);
    if (canceled)
        return;
    const [_num, toChat] = formValues;
    const num = parseInt(_num);
    if (Number.isNaN(num))
        return player.sendMessage("請輸入數字!");
    if (toChat)
        player.sendMessage(`你輸入了數字: ${num}`);
}

import { Player, world } from "@minecraft/server";

/* 
player : https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player?view=minecraft-bedrock-stable
*/

export function main(player: Player) {
  // dynamicProperty(動態屬性) 會被存到世界中，下次進入仍會保留

  // 設定屬性，類型可為 string | number | boolean | Vector3
  player.setDynamicProperty("yb:test", 123);

  // 取得時要自己標註類型，例如 as number
  const num = player.getDynamicProperty("yb:test") as number;
  player.sendMessage(`你的 DP 數字為 ${num}`);

  // 移除 DP
  player.setDynamicProperty("yb:test", null);

  // 移除所有 DP
  //   player.clearDynamicProperties()

  // 使用 JSON 儲存/讀取 物件
  type TestData = { name: string; score: number }; // 太龐大的結構可以拆開存，不然每次 JSON 轉換會很浪費性能
  const defaultData: TestData = { name: "idk", score: 0 };
  const rawData = player.getDynamicProperty("yb:data") as string; // 讀取被轉成文字的 data
  const data: TestData = rawData ? JSON.parse(rawData) : defaultData; // 沒有的話就載入預設值

  data.score += 1;
  player.setDynamicProperty("yb:data", JSON.stringify(data)); // 將物件轉換成文字儲存到 DP

  // DP 也可以存到 world
  world.setDynamicProperty("yb:test", "omg hello");
  const str = world.getDynamicProperty("yb:test") as string;
  world.sendMessage(`worldDP yb:test = ${str}`);
}

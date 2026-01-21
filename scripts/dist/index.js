import { CommandPermissionLevel, CustomCommandParamType, CustomCommandStatus, system, world, } from "@minecraft/server";
const tutorials = [
    "basic",
    "component",
    "dynamicProperty",
    "eventSubscribe",
    "form",
    "generator",
    "particle",
    "scoreboard",
];
// 註冊自定義指令
system.beforeEvents.startup.subscribe(({ customCommandRegistry }) => {
    customCommandRegistry.registerEnum("yb:tutorial_name", tutorials);
    customCommandRegistry.registerCommand({
        name: "yb:tutorial",
        description: "腳本 API 教學",
        permissionLevel: CommandPermissionLevel.Admin,
        mandatoryParameters: [
            {
                name: "yb:tutorial_name",
                type: CustomCommandParamType.Enum,
            },
        ],
    }, (origin, name) => {
        const player = origin.sourceEntity;
        world.sendMessage(`已執行 ${name}`);
        system.run(() => {
            import(`./tutorials/${name}`).then((module) => {
                module.main(player);
            });
        });
        return { status: CustomCommandStatus.Failure };
    });
});

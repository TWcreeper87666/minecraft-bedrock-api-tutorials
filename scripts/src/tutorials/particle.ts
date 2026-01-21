import { MolangVariableMap, Player, system, Vector3 } from "@minecraft/server";

export async function main(player: Player) {
  // 這邊用原版粒子舉例，可以用自己的資源包做出可控的粒子
  const mvm = new MolangVariableMap();

  for (let i = 0; i < 100; i++) {
    mvm.setColorRGB("note_color", {
      red: Math.random(),
      green: Math.random(),
      blue: Math.random(),
    });

    const head = player.getHeadLocation();
    const view = player.getViewDirection();

    player.spawnParticle("minecraft:note_particle", vectorAdd(head, view), mvm);
    await system.waitTicks(1);
  }
}

function vectorAdd(u: Vector3, v: Vector3): Vector3 {
  return {
    x: u.x + v.x,
    y: u.y + v.y,
    z: u.z + v.z,
  };
}

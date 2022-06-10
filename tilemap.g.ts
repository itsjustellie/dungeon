// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020302030e0f01060108010601010101010c1e050505050b0a050a0b05120c010105051b1d1d1c0505050505050505010105050505050505050505051605050101050505050b0b12050505050505050101050505050505050505050505050501010505050505050505050505050505010d05051605050505050505051f091411010505050505050505050505050505010105050505050505050505050505050101050505050505191818190505050501010505050505051a17171a05050505010113050505050505050505050505050101151515050505050505050505050501010c1515040404090a0707070a050c0101010110100101110107070701110101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . 2 2 . 2 2 . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.doorLockedNorth,sprites.dungeon.stairSouth,sprites.dungeon.stairLarge,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorLockedWest,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorLockedSouth,sprites.builtin.coral0,sprites.builtin.forestTiles0,sprites.swamp.swampTile13,sprites.dungeon.hazardLava0,sprites.swamp.swampTile0,sprites.builtin.field1,sprites.dungeon.buttonTeal,sprites.swamp.swampTile3,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

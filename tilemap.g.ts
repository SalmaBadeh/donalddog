// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002030303030303030303030303030303030303030003030303030303030003030303030303030303030300030303030303030303030303030303030303030303030003030303030303030303030303030303000303030000030303030303030303030303030303030303030300000303030303030303030303030303030303030303000003030303030303030303030303030303030303030303030303030003000003030303030303030303030303030303030303030303030303030303030303030303030300000303030303030303030303000003030303030000000303030101010101010101010101010101010101010101010101010101010101010101`, img`
. 2 . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. . 2 . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . 2 2 . . 
. . . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . 2 2 . . . . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile3,sprites.skillmap.islandTile0,sprites.skillmap.islandTile1], TileScale.Sixteen);
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

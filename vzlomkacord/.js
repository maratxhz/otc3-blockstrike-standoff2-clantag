//бля буду не пастп 
//переменные епта 
var lasttime = 0;
const version = "0.1"
umer = false;


UI.AddLabel ("vzlomka" + version)
UI.AddCheckbox("vzlom v0.1");


function vzlomat() {
	if (UI.GetValue("Script Items", "vzlomat ") == 1) {
		UI.SetEnabled( "Misc", "JAVASCRIPT", "Scripts", "Reload All", false );
	} else 
	UI.SetEnabled( "Misc", "JAVASCRIPT", "Scripts", "Reload All", true );
}


//ладно это модифаеД ПАСТА и мне пох 
function vzlomtag() {
    if (!World.GetServerString()) return;
    var time = parseInt((Globals.Curtime() * 4))
    if (time != lasttime) {
        switch((time) % 22) {
            case 1: { Local.SetClanTag("                "); break; }
            case 2: { Local.SetClanTag("              vz"); break; }
            case 3: { Local.SetClanTag("             vzl"); break; }
            case 4: { Local.SetClanTag("            vzlo"); break; }
            case 5: { Local.SetClanTag("           vzlom"); break; }
            case 6: { Local.SetClanTag("          vzlomk"); break; }
            case 7: { Local.SetClanTag("         vzlomka"); break; }
            case 8: { Local.SetClanTag("        vzlomka "); break; }
            case 9: { Local.SetClanTag("       vzlomka  "); break; }
            case 10:{ Local.SetClanTag("      vzlomka   "); break; }
            case 11:{ Local.SetClanTag("     vzlomka    "); break; }
            case 12:{ Local.SetClanTag("    vzlomka     "); break; }
            case 13:{ Local.SetClanTag("   vzlomka      "); break; }
            case 14:{ Local.SetClanTag("  vzlomka       "); break; }
            case 15:{ Local.SetClanTag(" vzlomka        "); break; }
            case 16:{ Local.SetClanTag("vzlomka         "); break; }
            case 17:{ Local.SetClanTag("zlomka          "); break; }
            case 18:{ Local.SetClanTag("lomka           "); break; }
            case 19:{ Local.SetClanTag("omka            "); break; }
            case 20:{ Local.SetClanTag("mka             "); break; }
            case 21:{ Local.SetClanTag("ka              "); break; }
            case 22:{ Local.SetClanTag("                "); break; }

    }
    lasttime = time;
}

function roundstart(){
	const roundstarte = ["ya vzlomal csgo global offenisf s pomoshu vzlomka vzlomka v"+ version];
	Cheat.ExecuteCommand("say " + roundstarte);
}
	
	
function roundend(){
	const roundende  = ["vzlomano by vzlomka v" + version];
    Cheat.ExecuteCommand("say " + roundende);
}

	
function miyagi () {
    var entities = Entity.GetEnemies();

    var images = [
        Render.AddTexture ("ot/scripts/vzlomka/anon1.jpg"),
        Render.AddTexture ("ot/scripts/vzlomka/anon2.jpg"),
        Render.AddTexture ("ot/scripts/vzlomka/anon3.jpg"),
        Render.AddTexture ("ot/scripts/vzlomka/anon4.jpg"),
        Render.AddTexture ("ot/scripts/vzlomka/anon5.jpg")
    ]

    for (var i = 0; i < entities.length; i++) {
        if (Entity.IsAlive(entities[i])) {
            var DDD = entities[i] % 5
            var pos = Entity.GetRenderBox(entities[i]);

            var sizeY = (pos[4] - pos[2]);
            var sizeX = (pos[3] - pos[1]);

            Render.TexturedRect(pos[1], pos[2], sizeX, sizeY, images[DDD]);
        }
    }
}
function rendermorgenaa() {
    if (!World.GetServerString()) return;
    vzlomaafont = Render.AddFont("Smallest Pixel-7", 16, 400);
    x = screensize[0];
    y = screensize[1];
    var vzlomaa_check = UI.IsHotkeyActive("Script Items", "vzlom aa bind");
    var morgenaa_check2 = UI.GetValue("Script Items", "vzlom aa");
    if (morgenaa_check2 == true) {
        Render.StringCustom(x / 25, y / 2 + 20, 1, vzlomaa_check ? "vzlomaa" : "vzlomaa", vzlomaa_check ? [ 0, 255, 0, 255 ] : [ 255, 0, 0, 255 ], vzlomaafont );
    }
function Main()
{
	Cheat.RegisterCallback("CreateMove", "antiaim");
	Cheat.RegisterCallback ("Draw", "miyagi");
	Cheat.RegisterCallback("round_mvp", "mvpmvp");
	Cheat.RegisterCallback("round_start", "roundstart");
	Cheat.RegisterCallback("Draw", "vzlomtag");
	Cheat.RegisterCallback("round_end", "roundend");
	Cheat.RegisterCallback("Draw", "vzlomat");
}
//взломк

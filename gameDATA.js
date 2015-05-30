gDATA = {};
gDATA.userClick = {};
var temp = 0.4;
gDATA.house = [
    {x: 0, y: 0},
    {x: 0.05*settings.CW*temp, y: -0.03*settings.CH*temp},
    {x: 0.10*settings.CW*temp, y: 0},
    //closepath
    {x: 0, y: 0},
    {x: 0, y: 0.08*settings.CH*temp},
    {x: 0.10*settings.CW*temp, y: 0.08*settings.CH*temp},
    {x: 0.10*settings.CW*temp, y: 0*settings.CH*temp},
]
gDATA.bg = [
    {x: 0, y: settings.CH},
    {x: 0, y: settings.CH*0.9},

    {x: settings.CW/105*5, y: settings.CH*0.82},
        {x: settings.CW/105*6, y: settings.CH*0.83},
        {x: settings.CW/105*9, y: settings.CH*0.83},
    {x: settings.CW/105*10, y: settings.CH*0.82},
    {x: settings.CW/105*15, y: settings.CH*0.9},
        {x: settings.CW/105*24, y: settings.CH*0.9},
        {x: settings.CW/105*25, y: settings.CH*0.91},
        {x: settings.CW/105*26, y: settings.CH*0.9},
        {x: settings.CW/105*34, y: settings.CH*0.9},
        {x: settings.CW/105*35, y: settings.CH*0.91},
        {x: settings.CW/105*36, y: settings.CH*0.9},
    {x: settings.CW/105*45, y: settings.CH*0.9},
    {x: settings.CW/105*50, y: settings.CH*0.82},
        {x: settings.CW/105*51, y: settings.CH*0.83},
        {x: settings.CW/105*54, y: settings.CH*0.83},
    {x: settings.CW/105*55, y: settings.CH*0.82},
    {x: settings.CW/105*60, y: settings.CH*0.9},
        {x: settings.CW/105*69, y: settings.CH*0.9},
        {x: settings.CW/105*70, y: settings.CH*0.91},
        {x: settings.CW/105*71, y: settings.CH*0.9},
        {x: settings.CW/105*79, y: settings.CH*0.9},
        {x: settings.CW/105*80, y: settings.CH*0.91},
        {x: settings.CW/105*81, y: settings.CH*0.9},
    {x: settings.CW/105*90, y: settings.CH*0.9},
    {x: settings.CW/105*95, y: settings.CH*0.82},
        {x: settings.CW/105*96, y: settings.CH*0.83},
        {x: settings.CW/105*99, y: settings.CH*0.83},
    {x: settings.CW/105*100, y: settings.CH*0.82},
    {x: settings.CW, y: settings.CH*0.9},

    {x: settings.CW, y: settings.CH},
    {x: 0, y: settings.CH},
]
gDATA.villages = [
    {x: settings.CW/105*20, y: settings.CH*0.95},
    {x: settings.CW/105*30, y: settings.CH*0.95},
    {x: settings.CW/105*40, y: settings.CH*0.95},
    {x: settings.CW/105*65, y: settings.CH*0.95},
    {x: settings.CW/105*75, y: settings.CH*0.95},
    {x: settings.CW/105*85, y: settings.CH*0.95},
]
gDATA.bases = [];
for(var i=0;i<3;i++){
    gDATA.bases[i] = {
        x: (settings.CW/105*(i*45+7.5)),
        y: settings.CH*0.83,
    }
}


for(var i=0; i<3;i++){
    var b = gDATA.bases[i];
    b.bullets = [];
    var ww = 0;
    for(var j=0; j<4; j++){
        for(var k=0; k<j+1; k++){
            b.bullets[ww] = {
                x: b.x + settings.CW*((k*2-j)/100),
                y: b.y+settings.CH*(j*1.5/100),
            }
            ww++;
        }
    }
}
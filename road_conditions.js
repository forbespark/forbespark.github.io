
function addRoadConditions() {
    // Forbes Park Road Condition
    L.polyline(ForbesParkRD_seg1, { color: 'green' }).addTo(map).bindTooltip('Updated on 1/15/24 2:02AM', { direction: 'auto' });
    L.polyline(ForbesParkRD_seg2, { color: 'green' }).addTo(map);
    L.polyline(ForbesParkRD_seg3, { color: 'green' }).addTo(map);
    L.polyline(ForbesParkRD_seg4, { color: 'green' }).addTo(map);
    L.polyline(ForbesParkRD_seg5, { color: 'green' }).addTo(map);
    L.polyline(ForbesParkRD_seg6, { color: 'green' }).addTo(map);
    L.polyline(ForbesParkRD_seg7, { color: 'green' }).addTo(map);
    
    // Forbes Park Loop Condition
    L.polyline(ForbesParkLP_seg1, { color: 'orange' }).addTo(map);
    L.polyline(ForbesParkLP_seg2, { color: 'orange' }).addTo(map);
    L.polyline(ForbesParkLP_seg3, { color: 'orange' }).addTo(map);
    L.polyline(ForbesParkLP_seg4, { color: 'orange' }).addTo(map);
    
    // Wagon Creek Road Condition
    L.polyline(WagonCreek_RD_seg1, { color: 'red' }).addTo(map);
    
    // Messinger Place Condition
    L.polyline(Messinger_PL_seg1, { color: 'green' }).addTo(map);
    
    //Singer Lane
    L.polyline(Singer_LN_seg1, { color: 'green' }).addTo(map);
    
    //Emery Loop
    L.polyline(Emery_LP_seg1, { color: 'green' }).addTo(map);
    L.polyline(Emery_LP_seg2, { color: 'green' }).addTo(map);
    L.polyline(Emery_LP_seg3, { color: 'green' }).addTo(map);
    
    //Soubry Place
    L.polyline(Soubry_PL_seg1, { color: 'black' }).addTo(map);
    L.polyline(Soubry_PL_seg2, { color: 'black' }).addTo(map);
    
    
    // Leslie Loop
    L.polyline(Leslie_LP_seg1, { color: 'green' }).addTo(map);
    
    //MacDonald Place
    L.polyline(MacDonald_PL_seg1, { color: 'green' }).addTo(map);
    
    //Ove Place
    L.polyline(Ove_PL_seg1, { color: 'green' }).addTo(map);
    
    //Hassan Lane
    L.polyline(Hassan_LN_seg1, { color: 'green' }).addTo(map);
    L.polyline(Hassan_LN_seg2, { color: 'green' }).addTo(map);
    L.polyline(Hassan_LN_seg3, { color: 'green' }).addTo(map);
    
    //Granville Lane
    L.polyline(Granville_LN_seg1, { color: 'red' }).addTo(map);
    
    //Prince Moulay Lane
    L.polyline(PrinceMoulay_LN_seg1, { color: 'red' }).addTo(map);
    
    //Shumway Place
    L.polyline(Shumway_PL_seg1, { color: 'green' }).addTo(map);
    L.polyline(Shumway_PL_seg2, { color: 'green' }).addTo(map);
    
    //Petito Drive
    L.polyline(Petito_DR_seg1, { color: 'green' }).addTo(map);
    L.polyline(Petito_DR_seg2, { color: 'green' }).addTo(map);
    L.polyline(Petito_DR_seg3, { color: 'green' }).addTo(map);
    L.polyline(Petito_DR_seg4, { color: 'green' }).addTo(map);
    
    //Henderson Drive
    L.polyline(Henderson_DR_seg1, { color: 'green' }).addTo(map);
    L.polyline(Henderson_DR_seg2, { color: 'green' }).addTo(map);
    
    //Wagon Mesa Loop
    L.polyline(WagonMesa_LP_seg1, { color: 'green' }).addTo(map);
    
    // Shgpard Place
    L.polyline(Shgpard_PL_seg1, { color: 'green' }).addTo(map);

    //Foy Place
    L.polyline(Foy_PL_seg1, { color: 'green' }).addTo(map);

    //Terry Place
    L.polyline(Terry_PL_seg1, {color: 'orange'}).addTo(map);

    //Grojean Drive
    L.polyline(Grojean_DR_seg1, {color: 'orange'}).addTo(map);

}

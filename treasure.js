AFRAME.registerComponent("ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `ring${i}`;
  
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };

        this.ring(id, position);
      }
    } ,
  
    ring: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      ringEl.setAttribute('scale',{x:500,y:500,z:500})
      ringEl.setAttribute('gltf-model','./assets/treasure/scene.gltf')
      ringEl.setAttribute('animation-mixer',{})

      terrainEl.appendChild(ringEl);
    }
  });
  
  
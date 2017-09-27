//加载房间
			function addRoom(){
				//创建三面墙和地板----------------------------------------------------
						// 创建好一个方块的材质 (第一面墙左边)
				 var cubeGeometry = new THREE.CubeGeometry(0.2,4,25.9);
				var materials = [];
				for (var i = 0; i < 6; ++i) {
					var pic = "img/huise.jpg";
					if(i==0){
						pic = "img/ds.jpg";
					}
						  materials.push(new THREE.MeshBasicMaterial({
						        map: THREE.ImageUtils.loadTexture(pic,
						            {}, function() {
						            renderer.render(scene, camera);
						        }),
						    overdraw: true,
						   antialias:true
						    })); 
				}
				var cube = new THREE.Mesh(cubeGeometry,
				    new THREE.MeshFaceMaterial(materials));
	            cube.position.x = -23;
	            cube.position.y = 2;
	            cube.position.z = 0;
	            cube.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cube);
	            //创建墙脚面
						// 创建好一个方块的材质 (第一面墙脚面)
				var cubeGeometryK1 = new THREE.CubeGeometry(0.4,0.4,26);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = -23;
	            cubeK1.position.y =0.2;
	            cubeK1.position.z = 0;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
	            			// 创建好一个方块的材质 (第一面墙脚头)
				var cubeGeometryK1 = new THREE.CubeGeometry(0.4,0.4,26);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = -23;
	            cubeK1.position.y =4.1;
	            cubeK1.position.z = 0;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
	            
	            
	            
	            
	            	//创建几何体  第二面墙右边
				 var cubeGeometry2 = new THREE.CubeGeometry(0.2,4,25.9);
	            // 创建一个方块的几何形状
	       		 var materials2 = [];
				for (var i = 0; i < 6; ++i) {
					
					var pic = "img/huise.jpg";
					if(i==1){
						pic = "img/ds.jpg";
					}
				    materials2.push(new THREE.MeshBasicMaterial({
				        map: THREE.ImageUtils.loadTexture(pic,
				            {}, function() {
				            renderer.render(scene, camera);
				        }),
				    overdraw: true,antialias:true
				    }));
				}
				var cube2 = new THREE.Mesh(cubeGeometry2,
				    new THREE.MeshFaceMaterial(materials2));
	          
	            // 把它的形体和它的灵魂相结合，这时他就是一个完整的人
	            cube2.position.x = 23;
	            cube2.position.y = 2;
	            cube2.position.z = 0;
	            cube2.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cube2);
	            //创建墙脚面
						// 创建好一个方块的材质 (第一面墙脚面)
				var cubeGeometryK1 = new THREE.CubeGeometry(0.4,0.4,26);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = 23;
	            cubeK1.position.y =0.2;
	            cubeK1.position.z = 0;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
	            			// 创建好一个方块的材质 (第一面墙脚头)
				var cubeGeometryK1 = new THREE.CubeGeometry(0.4,0.4,26);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = 23;
	            cubeK1.position.y =4.1;
	            cubeK1.position.z = 0;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
	            
	            
	            
	            
	            	//创建几何体  第三面墙后边
				 var cubeGeometry3 = new THREE.CubeGeometry(52,4,0.2);
	            // 创建一个方块的几何形状
	            var materials3 = [];
				for (var i = 0; i < 6; ++i) {
					var pic = "img/huise.jpg";
					if(i!=4){
						pic = "img/ds.jpg";
					}
					
				    materials3.push(new THREE.MeshBasicMaterial({
				        map: THREE.ImageUtils.loadTexture(pic,
				            {}, function() {
				            renderer.render(scene, camera);
				        }), 
				    overdraw: true,antialias:true
				    }));
				}
				var cube3 = new THREE.Mesh(cubeGeometry3,
				    new THREE.MeshFaceMaterial(materials3));
	            // 把它的形体和它的灵魂相结合，这时他就是一个完整的人
	            cube3.position.x = 3;
	            cube3.position.y = 2;
	            cube3.position.z = -12.5;
	            cube3.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cube3);
			
						// 创建好一个方块的材质 (第一面墙脚面)
				var cubeGeometryK1 = new THREE.CubeGeometry(52,0.4,0.4);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = 3;
	            cubeK1.position.y =0.2;
	            cubeK1.position.z = -12.5;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
	            			// 创建好一个方块的材质 (第一面墙脚头)
				var cubeGeometryK1 = new THREE.CubeGeometry(52,0.4,0.4);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = 3;
	            cubeK1.position.y =4.1;
	            cubeK1.position.z = -12.5;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
				
				
				
				
				var mesh;
				var xnum = -15;
				/*for (var i = 0;i<=8;i++) {
					addCube(i);
				}*/
				//创建几何体  地板
				 var cubeGeometry4 = new THREE.CubeGeometry(55,0.3,30);
	            // 创建一个方块的几何形状
	            var materials4 = [];
				for (var i = 0; i < 6; ++i) {
					if(i==2){
							materials4.push(new THREE.MeshBasicMaterial({
					        map: THREE.ImageUtils.loadTexture('img/floor.jpg',
					            {}, function() {
					            renderer.render(scene, camera);
						        }), 
						    overdraw: true
						    }));
					}else{
						materials4.push(new THREE.MeshBasicMaterial({
					        map: THREE.ImageUtils.loadTexture('img/white.jpg',
					            {}, function() {
					            renderer.render(scene, camera);
						        }), 
						    overdraw: true
						    }));
					}
				}
				var cube4 = new THREE.Mesh(cubeGeometry4,
				    new THREE.MeshFaceMaterial(materials4));
	            // 把它的形体和它的灵魂相结合，这时他就是一个完整的人
	            cube4.position.x = 2.5;
	            cube4.position.y = -0.21;
	            cube4.position.z = 0;
	            cube4.castShadow = false;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cube4);
				//创建三面墙和地板 end----------------------------------------------------
				
				/**
		     * 创建线条对象
		     */
		    var geometryLine = new THREE.Geometry();//声明一个空几何体对象
		    var p1Line = new THREE.Vector3(-18,0,10);//顶点1坐标
		    var p2Line = new THREE.Vector3(-23,0,10);//顶点2坐标
		    geometryLine.vertices.push(p1Line,p2Line); //顶点坐标添加到geometry对象
		    var materialLine=new THREE.LineBasicMaterial({
		        color:0xffffff //线条颜色
		    });//材质对象
		    var line=new THREE.Line(geometryLine,materialLine);//线条模型对象
		    scene.add(line);//线条对象添加到场景中
			var geometryLine2 = new THREE.Geometry();//声明一个空几何体对象
		    var p1Line2 = new THREE.Vector3(-18,0,13);//顶点1坐标
		    var p2Line2 = new THREE.Vector3(-23,0,13);//顶点2坐标
		    geometryLine2.vertices.push(p1Line2,p2Line2); //顶点坐标添加到geometry对象
		    var materialLine2=new THREE.LineBasicMaterial({
		        color:0xffffff //线条颜色
		    });//材质对象
		    var line2=new THREE.Line(geometryLine2,materialLine2);//线条模型对象
		    scene.add(line2);//线条对象添加到场景中	
				
			var geometryzz = new THREE.Geometry();//声明一个空几何体对象
			 var materialzz=new THREE.LineBasicMaterial({
		        color:0xffffff //线条颜色
		    });//材质对象
		    
		    //墙墩子
		     var cubeGeometryDun = new THREE.CubeGeometry(1,5,1);
			var materialsDun = new THREE.MeshLambertMaterial({color:0xA2B5CD});
				var cubeDun = new THREE.Mesh(cubeGeometryDun,
				    new THREE.MeshFaceMaterial(materialsDun));
	            cubeDun.position.x = -23;
	            cubeDun.position.y = 2;
	            cubeDun.position.z = -12;
	            cubeDun.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeDun);
		    
		     //墙墩子
		     var cubeGeometryDun2 = new THREE.CubeGeometry(1,5,1);
			var materialsDun2 = new THREE.MeshLambertMaterial({color:0xA2B5CD});
				var cubeDun2 = new THREE.Mesh(cubeGeometryDun2,
				    new THREE.MeshFaceMaterial(materialsDun2));
	            cubeDun2.position.x = 23;
	            cubeDun2.position.y = 2;
	            cubeDun2.position.z = -12;
	            cubeDun2.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeDun2);
		    
		    	//创建几何体  第二面墙右边
				 var cubeGeometry2 = new THREE.CubeGeometry(0.2,4,25.9);
	            // 创建一个方块的几何形状
	       		 var materials2 = [];
				for (var i = 0; i < 6; ++i) {
					
					var pic = "img/huise.jpg";
					if(i==1){
						pic = "img/ds.jpg";
					}
				    materials2.push(new THREE.MeshBasicMaterial({
				        map: THREE.ImageUtils.loadTexture(pic,
				            {}, function() {
				            renderer.render(scene, camera);
				        }),
				    overdraw: true,antialias:true
				    }));
				}
				var cube2 = new THREE.Mesh(cubeGeometry2,
				    new THREE.MeshFaceMaterial(materials2));
	          
	            // 把它的形体和它的灵魂相结合，这时他就是一个完整的人
	            cube2.position.x =29;
	            cube2.position.y = 2;
	            cube2.position.z = 0;
	            cube2.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cube2);
		    
		     			// 创建好一个方块的材质 (第一面墙脚头)
				var cubeGeometryK1 = new THREE.CubeGeometry(0.4,0.4,26);
				var cubeMaterialK1 = new THREE.MeshLambertMaterial({color:   0x7AC5CD});
				var cubeK1 = new THREE.Mesh(cubeGeometryK1,
				    new THREE.MeshFaceMaterial(cubeMaterialK1));
	            cubeK1.position.x = 29;
	            cubeK1.position.y =4.1;
	            cubeK1.position.z = 0;
	            cubeK1.castShadow = true;
	            // 同样的，得指定它在坐标系中的位置。
	            scene.add(cubeK1);
		    
			}
			
			
			function updateModelType(){
				var modelTypeHtml = '<div style="padding-right:10px;padding-left:10px">';
					
				modelTypeHtml +='<img  src="img/wen.jpg" id="wen" name = "wen" onclick="checkEnd(this.src,this.name)" style="width: 200px; height: 200px; margin:5px;"/>';
					modelTypeHtml +='<img  src="img/tv.jpg" id="tv" name = "tv" onclick="checkEnd(this.src,this.name)" style="width: 200px; height: 200px; margin:5px;"/>';

					modelTypeHtml+='</div>';
						 	layer.open({
						 		 title: '点击选择模型',
						 		 skin: 'layui-layer-demo',
								  type: 1,
								  anim:2,
								  skin: 'layui-layer-rim', //加上边框
								  area: ['650px', '500'], //宽高
								  content: modelTypeHtml
							});
							
			}
			function checkEnd(picUrl,name){
				layer.closeAll();
				$("#modelPic").attr('src',picUrl); 
				console.log(name);
				 $("#modeName").text(name);
			}
		
		
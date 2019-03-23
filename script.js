persoane=[];
			

            function adaugaPersoana(){
                var persoana={};
                persoana.nume= document.querySelector('input[name="nume"]').value;
                persoana.telefon= document.querySelector('input[name="telefon"]').value;
                if(persoana.nume !== "" && persoana.telefon !== "" ){
                    persoane.push(persoana);
                }
                
                draw();
                
                document.querySelector('input[name="nume"]').value = null;
                document.querySelector('input[name="telefon"]').value = null;
            }


            function draw(){
                var tabel = document.querySelector('#tabelPersoane');
                tabel.innerHTML = "";
                for(var i=0; i<persoane.length;i++){
                    tabel.innerHTML += `
                            <tr>
								<td>${persoane[i].nume}</td>
								<td>${persoane[i].telefon}</td>
								<td>
								<button class="editBtn" onclick="editeazaPersoana(${i});">MODIFICA</button>
								<button class="deleteBtn" onclick="sterge(${i});">STERGE</button>
								</td>
							</tr>`;
							if(persoane.length===0){
								document.querySelector('.continut2').classList.remove('visible');
							}else{
								document.querySelector('.continut2').classList.add('visible');
							}
                }
				document.querySelector("#saveBtn").style.display = "none";
				document.querySelector("#addBtn").style.display = "block";
            }

			function editeazaPersoana(idx){
				
				document.querySelector('input[name="nume"]').value = persoane[idx].nume;
                document.querySelector('input[name="telefon"]').value = persoane[idx].telefon;
				document.querySelector("#saveBtn").style.display = "block";
				document.querySelector("#addBtn").style.display = "none";

				window.indx = idx;
			}
			function saveEdit(){
					persoane[indx].nume = document.querySelector('input[name="nume"]').value ;
					persoane[indx].telefon = document.querySelector('input[name="telefon"]').value;
					draw();
				
					document.querySelector('input[name="nume"]').value = null;
					document.querySelector('input[name="telefon"]').value = null;
				}
			function sterge(indx){
				persoane.splice(indx,1);
				draw();
			}

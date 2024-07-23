export function MinhaFunc() {
    const numeros = [1,2,3,4];
    let i: number;
  
    for(i=0; i<numeros.length; i++){
      console.log(numeros[i]);
    }
}


export function pesquisaCarros(){
  const input = document.getElementById('pesquisa-carros') as HTMLInputElement;
  const valor = input.value;

  alert(`Pesquisando por: ${valor}`);

}
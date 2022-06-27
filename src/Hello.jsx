import "./Hello.css";
function Hello({txt}) {
    function clickMouse(){
        atualiza(contador+1)
    };
    return(
        <button className="botao" >
        Order Now
        </button>
    ); 
};
export default Hello;

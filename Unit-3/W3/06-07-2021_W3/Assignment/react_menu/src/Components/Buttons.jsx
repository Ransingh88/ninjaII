


export function Buttons({name,bgclr}) {
    console.log(name)
    var btn = {
    color: 'white',
    fontSize: '16px',
    margin: '6px 12px',
    borderRadius: '30px',
        height: '30px',
    backgroundColor:bgclr,
    width:'150px',
        border:'none',
    }
    return <>
    <button style={btn}>{name}</button>
        </>
}
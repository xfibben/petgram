
export default function Navbar(){
    const profile="arturo"

    return(<div>
        <a href={'/'}>Home</a>
        <a href={`/${profile}`}>Profile</a>
        <a>Likes</a>

    </div>)
}
import "../share/share.css"
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useRef } from "react"
import axios from "axios"
const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const {user} = useContext(AuthContext)
    const desc = useRef()
    const[file, setFile] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(file){
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append("file", file)
            data.append("name", fileName)
            newPost.img = fileName

            try {
                await axios.post("/upload", data)
            } catch (error) {
                console.log(error)
                
            }
        }

        try {
            await axios.post("/post", newPost)
            window.location.reload()
        } catch (error) {
            
        }

    }
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" 
                src={user.profilePicture ? PF + user.profilePicture  : PF+"person/noAvatar.png"}
                 alt="" />
                <input 
                ref={desc}
                placeholder={`whats on your mind` + user.username + "?"} 
                
                type="text" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <form onSubmit={handleSubmit} className="shareBottom">
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                        <input type="file"
                        style={{display: "none"}}
                        id="file"
                        accept=".png, .gif, .jpeg, .jpg"
                        onChange={(e) => setFile(e.target.files[0])}
                        />
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">tag</span>
                    </div>

                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText">Feeling</span>
                    </div>
                </div>
                <button type="submit" className="shareButton">
                    Share
                </button>

            </form>
        </div>

    </div>
  )
}

export default Share
import ShowPostCommand from "../../Infrastructure/Commands/ShowPostCommand";
import { Roles } from "../Enums/Roles";
import Post from "../Entity/Post";
import User from "../Entity/User";

class ShowPostsService {

    public async execute(command: ShowPostCommand): Promise<Post[]> {

        const userId: number = command.getUserId();
        const user: User = await User.findOneOrFail(userId);

        if(user.hasRole(Roles.VIEWER)){
            return Post.find();
        }

        return Post.find({relations: ['comment']});
    }
}

export default ShowPostsService;
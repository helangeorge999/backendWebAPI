import { CreateUserDto, UserResponseDto } from "../dtos/user.dto";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";

export class UserService{
    //dependency Injection
    constructor(private userRepository: UserRepositoryInterface){}

    async registerUser( userData: CreateUserDto): Promise<UserResponseDto>{
        //business Logic
        const newUser = await this.userRepository.createUser(userData);
        // validation after query if needed
        // .. if duplicate found, thwor error
        // map and transform
        const response : UserResponseDto = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email ?? "N/A",
            createAt: newUser.createdAt,
        };
        return response;
    }

}
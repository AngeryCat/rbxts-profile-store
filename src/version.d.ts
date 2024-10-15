import { Profile } from "./profile";

export interface VersionQuery<T extends object> {
	NextAsync(): Profile<T> | undefined;
}

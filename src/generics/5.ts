export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

type RoleType = Record<UserRole, string>;

const RoleDescription : RoleType = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};

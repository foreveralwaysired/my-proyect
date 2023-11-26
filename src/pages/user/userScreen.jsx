import React, { useEffect } from 'react'
import { UserForm } from '../../components/user/userForm'
import { useIsMounted } from '../../hooks/customHooks/useIsMounted';
import { useUserStore } from '../../hooks/user/useUserStore';

export const UserScreen = () => {
    const { startGetLstRegisteredUsers, onClearUserData } = useUserStore();
    const isMounted = useIsMounted();


    useEffect(() => {
        if (isMounted()) {
            // startGetLstRegisteredUsers();
        }
        return () => {
            onClearUserData();
        }// eslint-disable-next-line
    }, [isMounted])

    return (
        <div className="mx-2 grid">
            <div className="col-12 card">
                <div className="col-12">
                    <h1 className="text-center">Usuarios</h1>
                </div>
                {/* <UserForm /> */}
            </div>
        </div>
    )
}

const AuthLayout = ({ children }: any) => {
    return (
        <div>
            <nav className="bg-red-500 text-white">
                This is Auth Layout !
            </nav>
            { children }
        </div>
    );
}

export default AuthLayout;
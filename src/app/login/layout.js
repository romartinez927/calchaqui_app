import { AuthProvider } from '@/context/AuthContext'
export const metadata = {
    title: 'Inicio',
    description: 'Clínica',
}
export default function LoginLayout({ children }) {
    return (
        <html lang="en" className='dark'>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous" />
            </head>
            <body >
                <AuthProvider>
                    {children}
                </AuthProvider>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
                <script src="https://kit.fontawesome.com/3805137161.js" crossOrigin="anonymous"></script>
            </body>
        </html>
    )
}
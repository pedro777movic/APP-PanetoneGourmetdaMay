
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // A lógica de proteção de rota foi movida para o AppLayout usando o hook useAuth.
  // Este middleware pode ser usado para outras finalidades no futuro, se necessário.
  return NextResponse.next()
}

// A configuração de "matcher" está comentada para desativar o middleware por enquanto,
// já que a lógica está no lado do cliente.
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
// }

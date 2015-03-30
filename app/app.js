import { router, route } from 'reapp-kit';

router(require,
  route('articles', '/',
    route('article', '/article/:id'),
    route('user', '/user/:id')
  )
)
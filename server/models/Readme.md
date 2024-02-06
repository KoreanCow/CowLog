User (사용자)
│
├── posts: [Post] (해당 사용자가 작성한 게시물들)
│
└── creator: User (위시리스트를 작성한 사용자)

Post (게시물)
├── category: Category (게시물의 카테고리)
│
└── creator: User (게시물을 작성한 사용자)

Wish (위시리스트)
├── wish: Wish (위시 리스트 포스트)
│
└── creator: User (위시 리스트를 작성한 사용자)

Category (카테고리)
└── posts: [Post] (해당 카테고리에 속한 게시물들)

User (사용자)
│
└── posts: [Post] (해당 사용자가 작성한 게시물들)

Post (게시물)
├── category: Category (게시물의 카테고리)
│
└── creator: User (게시물을 작성한 사용자)

Category (카테고리)
└── posts: [Post] (해당 카테고리에 속한 게시물들)

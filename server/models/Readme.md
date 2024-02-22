## 데이터 모델

- 사용자(User)

  - posts: [Post] (해당 사용자가 작성한 게시물들)
  - creator: User (위시리스트를 작성한 사용자)

- 게시물(Post)

  - category: Category (게시물의 카테고리)
  - creator: User (게시물을 작성한 사용자)

- 위시리스트(Wish)

  - wish: Wish (위시 리스트 포스트)
  - creator: User (위시 리스트를 작성한 사용자)

- 카테고리(Category)

  - posts: [Post] (해당 카테고리에 속한 게시물들)

- 메인이미지(MainImg)
  - mainImg: MainImg (메인 화면 이미지 저장목록)

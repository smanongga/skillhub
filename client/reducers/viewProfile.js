const initialState = {
  // firstName: 'Sam',
  // lastName: 'Manongga',
  // bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros massa, viverra vel nunc eu, varius lobortis nisl. Duis magna odio, pulvinar vitae neque id, accumsan accumsan ipsum. In euismod lacus vitae libero accumsan, vitae ultricies velit mattis. Ut non ipsum faucibus, auctor sem non, ornare quam. Nunc lacus tortor, porta et euismod eget, facilisis sit amet risus. Nam sed eleifend diam. Maecenas vel felis a purus egestas malesuada sit amet et est.“',
  // locationCity: 'Wellington',
  // learn: ['wordpress', 'javascript'],
  // teach: ['Guitar']
}
const viewProfile = (state = [initialState], action) => {
  switch (action.type) {
    case 'GET_PROFILE':
      return [
        action.data
      ]

    default:
      return state
  }
}

export default viewProfile

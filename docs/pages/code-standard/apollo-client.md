# Apollo Client

- Each query will live inside of the folder gql/queries
- Each mutation will live inside of the folder gql/mutations
- When we're doing the query or mutation declaration, name should be uppercase, as follows:
```js
    export const GET_USER_INFORMATION = gql`
    query {
        me {
        accessToken
        id
        firstName
        lastName
        phoneNumber
        contactEmail
        profilePhoto {
            id
            url
        }
        agent {
            completedStages {
            totalStages
            incompleteStages
            completeStages
            }
        }
        vendor {
            id
            email
            businessName
        }
        }
    }
    `;
```

# Naming of querys or mutations when we call them in our functional component:
- The destructuring of properties, should follow the pattern of for example "data: invitationsData", "loading: loadingInvitationsData", "error: errorInvitationsData"

```js
//bad
const {data, loading, error} = useQuery(GET_USER)
```

```js
//good
const {data: userData, loading: loadingUserData, error: errorUserData} = useQuery(GET_USER)
```

If it's a lazy query we can do something like:
```js
const [fetchUserData, {data: userData, loading: loadingUserData, error: errorUserData}] = useLazyQuery(GET_USER)
```
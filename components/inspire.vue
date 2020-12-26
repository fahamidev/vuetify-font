<template>
    <v-row>
        <v-col class="text-center">
            <img src="/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote class="blockquote">
                &#8220;First, solve the problem. Then, write the code.&#8221;
                <footer>
                    <small>
                        <em>&mdash;John Johnson</em>
                    </small>
                </footer>
            </blockquote>
            <v-form ref="form">
                <v-text-field
                    v-model="model"
                    :rules="nameRules"
                    label="First name"
                />
            </v-form>
        </v-col>
    </v-row>
</template>

<script>
import { actionType } from '~/store/todo/actions'

export default {
    data: () => ({
        allowSpaces: false,
        model: 'Foobar',
        nameRules: [
            (v) => !!v || 'Name is required',
            (v) => v.length <= 10 || 'Name must be less than 10 characters',
        ],
    }),
}
</script>

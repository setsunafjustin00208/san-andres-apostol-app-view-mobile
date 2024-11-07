<template>
    <div class="settings-container">
        <div class="container is-fluid">
            <h3 class="title is-4">
                Settings
            </h3>
            <div class="box">
                <h4 class="title is-5">Personalization</h4>
                <div class="field">
                    <div class="field">
                        <input id="switchExample" type="checkbox" name="switchExample" class="switch is-warning" checked="checked">
                        <label for="switchExample">Dark Mode</label>
                    </div>
                </div>
                <div class="field is-flex is-align-items-center is-justify-content-space-between">
                    <label class="label">Font Settings</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field is-flex is-align-items-center is-justify-content-space-between">
                    <label class="label">Font Style</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Sans-serif</option>
                                <option>Serif</option>
                                <option>Monospace</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <h4 class="title is-5">Miscellaneous</h4>
                <div class="field is-flex is-align-items-center is-justify-content-space-between">
                    <label class="label">Send Bug Report</label>
                    <div class="control">
                        <button class="button has-background-warning-40 is-rounded" @click="sendEmail('bug report')"><i class="fas fa-bug"></i></button>
                    </div>
                </div>
                <div class="field is-flex is-align-items-center is-justify-content-space-between">
                    <label class="label">Send Suggestions</label>
                    <div class="control">
                        <button class="button has-background-warning-40 is-rounded" @click="sendEmail('suggestions')"><i class="fas fa-lightbulb"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SettingsComponent'
}
</script>

<style scoped>
.settings-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 3em 0em 4em 0em;
    
}
</style>
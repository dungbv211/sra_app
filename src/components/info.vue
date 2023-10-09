<template>
    <div>
        <div class="info__navbar">
            <p v-on:click="changeTabs('info')">User information</p>
            <p v-on:click="changeTabs('details')">Working details</p>
        </div>
        <div class="User__info" v-if="tabSelected === 'info'">
            <div class="info__user">
                <h2>USER INFOMATION</h2>
                <div class="info-details">
                    <div class="info-details__main">
                        <div class="user-account">
                            <img src="../assets/avatar.svg" alt="">
                            <div>
                                <p>Bui Viet Dung</p>
                                <p>dungbv@smartosc.com</p>
                            </div>
                        </div>
                        <table>
                            <tr>
                                <th>status</th>
                                <td>active</td>
                            </tr>
                            <tr>
                                <th>name</th>
                                <td>Bui Viet Dung</td>
                            </tr>
                            <tr>
                                <th>Employee ID</th>
                                <td>4447</td>
                            </tr>
                            <tr>
                                <th>gender</th>
                                <td>male</td>
                            </tr>
                        </table>
                    </div>
                    <table>
                        <tr>
                            <th>Division</th>
                            <td>Division 6</td>
                        </tr>
                        <tr>
                            <th>Department</th>
                            <td>Division6-Frontend</td>
                        </tr>
                        <tr>
                            <th>Resource Owner</th>
                            <td>Nguyen Thanh Tung(tungnt3)</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>intern developed</td>
                        </tr>
                        <tr>
                            <th>Rank</th>
                            <td>Undefine</td>
                        </tr>
                        <tr>
                            <th>Ratio</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th>Total Projects</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th>Total Hours</th>
                            <td>8</td>
                        </tr>
                        <tr>
                            <th>Total Running Projects</th>
                            <td>1</td>
                        </tr>

                    </table>
                </div>
            </div>
            <div class="info__skill">
                <div class="info__skills"> 
                    <h4>Skills</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>LEVEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>NodeJS</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>HTML,CSS,JS</td>
                                <td>Junior</td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td>Junior</td>
                            </tr>
                            <tr>
                                <td>Vue</td>
                                <td>intern</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="info__language">
                    <h4>LANGUAGES</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>LEVEL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>English</td>
                                <td>Intermedicate</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="working-details" v-else-if="tabSelected ==='details'">
            <div class="working-details__week-effort">
                <p>CURRENT WEEK EFFORT</p>
                <div>
                    <b-table bordered fixed responsive :items="effort"></b-table>
                </div>
            </div>
            <div class="working-details__descript">
                <p>WORKING DETAILS</p>
                <div>
                    <b-table bordered hover :items="items" :fields="fields"></b-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SraUiInfo',

    data() {
        return {
            tabSelected:'info',
            effort: [
            {
                no: '1',
                project_name: 'Smartosc Devsecops For Carehealth Dedicated',
                '∑': '8',
                '09/25': '8',
                '09/26': '8',
                '09/27': '8',
                '09/28': '8',
                '09/29': '8',
                '10/02': '8',
                '10/03': '8',
                '10/04': '8',
                '10/05': '8',
                '10/06': '8',
            }
            ],
            fields: [
                'STT','project_name', 'start_date', 'end_date', 'total_effort','evaluation'
            ],
            items: [
                { isActive: true, start_date: '2023-03-11', project_name: 'Heros Website Development Wo 2', STT: '1', end_date: '2023-03-31',total_effort: '30', evaluation:'N/A' },
                { isActive: false, start_date: '2023-03-01', project_name: 'Heros Website Development Wo 2', STT: '2',end_date: '2023-03-10',total_effort: '32', evaluation:'N/A' },
                { isActive: false, start_date: '2023-03-13', project_name: 'Heros Website Development Wo 2', STT: '3',end_date: '2023-02-28',total_effort: '48', evaluation:'N/A' },
                { isActive: true, start_date: '2022-10-01', project_name: 'SCG DEdicated Resource', STT: '4',end_date: '2022-10-31',total_effort: '168', evaluation:'N/A' }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        changeTabs(tab) {
            this.tabSelected = tab;
        }
    },
};
</script>

<style scoped>
.info__navbar{
    display: flex;
    gap: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin: 20px;
}
.info__navbar p{
    cursor: pointer;
}
.info__user{
    box-sizing: border-box;
    margin: 20px;
    padding: 10px;
}

.info-details{
    display: flex;
    justify-content: flex-start;
    align-self: stretch;
}
.info-details__main{
}
.user-account {
    display: flex;
    align-items: center;
}
.user-account img {
    width: 60px;
    height: 60px;
}
.user-account p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.45;
    color: #6e6b7b;
}
th {
    color: #6e6b7b;
    font-weight: 400    ;
}

.info__skill{
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    margin: 20px;
}
</style>
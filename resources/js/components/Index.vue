<template>
    <div>
        <h2>Data Buku</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Penerbit</th>
                    <th>Tahun Terbit</th>
                    <th>Aksi</th>
                </tr>
                <tr v-for="(b, index) in buku" :key="b.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ b.judul }}</td>
                    <td>{{ b.penulis }}</td>
                    <td>{{ b.penerbit }}</td>
                    <td>{{ b.tahun }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{ name : 'edit', params : { id :b.id } }" class="btn btn-warning font-weight-bold">Edit</router-link>
                            <button class="btn btn-danger mx-2" @click="hapus(b.id)">Hapus</button>
                        </div>
                    </td>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>
export default {
    data : function() {
            return {
            buku : {}
        }
    },
    methods : {
        getData() {
            this.axios.get('buku').then(response => (
                this.buku = response.data.reverse()
            )).catch(err => console.log(err)).finally(() => this.loading = false)
        },
        hapus(id){
            this.axios.delete('buku/'+id).then(response => {
                console.log(response.data);
                this.getData()
            }).catch(error => console.log(error))
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

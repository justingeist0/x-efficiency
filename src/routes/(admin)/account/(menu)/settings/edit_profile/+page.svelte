<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()

  let { profile } = data
</script>

<svelte:head>
  <title>Edit Profile</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  editable={true}
  title="Edit Profile"
  successTitle="Saved Profile"
  formTarget="/account/api?/updateProfile"
  fields={[
    {
      id: "fullName",
      label: "Name",
      initialValue: profile?.full_name ?? "",
      placeholder: "Your full name",
      maxlength: 50,
    },
    {
      id: "companyName",
      label: "X Account",
      initialValue: profile?.company_name ?? "",
      maxlength: 50,
    },
    {
      id: "website",
      label: "Main Goal",
      initialValue: profile?.website ?? "",
      maxlength: 50,
    },
  ]}
/>

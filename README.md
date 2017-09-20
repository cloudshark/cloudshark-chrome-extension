# CloudShark Extension for Chrome

The [CloudShark](https://www.cloudshark.org) extension for Chrome lets you jump
directly to an 
[analysis tool](https://support.cloudshark.org/user-guide/#analysis-tools) for 
a capture instead of opening a view showing all of the packets in the file.
When viewing the capture index showing all of your capture files right-click on 
one to bring up the context menu and hover over CloudShark to view the available
analysis tools that can be opened. The currently available analysis tools are:

* [Ladder Diagram](https://support.cloudshark.org/user-guide/ladder-view.html)
* [Endpoints](https://support.cloudshark.org/user-guide/endpoints.html)
* [Conversations](https://support.cloudshark.org/user-guide/protocol-conversations.html)
* [Protocol Hierarchy](https://support.cloudshark.org/user-guide/protocol-hierarchy.html)
* [DNS Activity](https://support.cloudshark.org/user-guide/dns-tool.html)
* [VoIP Calls](https://support.cloudshark.org/user-guide/voip-calls.html)
* [RTP Analysis](https://support.cloudshark.org/user-guide/rtp-streams.html)
* [HTTP Analysis](https://support.cloudshark.org/user-guide/analyze-http-requests.html)
* [HTTP Objects](https://support.cloudshark.org/user-guide/http-objects.html)
* [Wireless Networks](https://support.cloudshark.org/user-guide/wireless-networks.html)
* [Threat Assessment](https://enterprise.cloudshark.org/threat-assessment/)

## CloudShark Enterprise

This extension is only configured to work with the hosted version of CloudShark
at https://www.cloudshark.org. Enterprise customers with their own instance of
CloudShark should be able to clone this repository and modify the
`manifest.json` file to replace this URL with the URL of their specific
instance. The extension can be loaded as an unpacked extension by browsing to
chrome://extensions/ and enabling developer mode. Here are also [Alternative
Extension Distribution](https://developer.chrome.com/apps/external_extensions)
instructions from Google.

Please contact support@cloudshark.org with any questions or suggestions!
